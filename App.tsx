import React, { useState, createContext, useContext, useMemo, useEffect, Suspense, lazy } from 'react';
import { User, Survey, UserRole, Announcement } from './types';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {
    loadSession, saveSession, clearSession,
    api
} from './services/storage';

const Auth = lazy(() => import('./components/Auth'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const MemberDashboard = lazy(() => import('./components/MemberDashboard'));

const initialSurveys: Survey[] = [
    {
        id: 'survey-1',
        question: 'What should be the theme for our annual union gala?',
        options: [
            { id: 'opt-1-1', text: 'Masquerade Ball' },
            { id: 'opt-1-2', text: 'Retro 80s Night' },
        ],
        votes: {},
    }
];

interface AppContextType {
    currentUser: User | null;
    users: User[];
    surveys: Survey[];
    announcements: Announcement[];
    memberLogin: (email: string, password?: string) => Promise<{ success: boolean; pending?: boolean; error?: string }>;
    adminLogin: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    register: (newUser: Omit<User, 'id' | 'role'>) => Promise<boolean>;
    approveRegistration: (id: string) => Promise<void>;
    rejectRegistration: (id: string) => Promise<void>;
    createSurvey: (survey: Omit<Survey, 'id' | 'votes'>) => void;
    deleteSurvey: (id: string) => Promise<void>;
    submitVote: (surveyId: string, optionId: string) => void;
    createAnnouncement: (title: string, content: string, driveAttachment?: Announcement['attachment'] | null) => Promise<void>;
    updateAnnouncement: (id: string, title: string, content: string) => Promise<void>;
    deleteAnnouncement: (announcementId: string) => Promise<void>;
    fetchAnnouncements: () => Promise<void>;
}

const AppContext = createContext<AppContextType | null>(null);
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showAuth, setShowAuth] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [surveys, setSurveys] = useState<Survey[]>([]);
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const init = async () => {
            try {
                const loadedSurveys = await api.getSurveys() as Survey[];
                if (loadedSurveys.length > 0) setSurveys(loadedSurveys);
                else {
                    setSurveys(initialSurveys);
                }

                const session = loadSession();
                if (session && session.user) {
                    setCurrentUser(session.user);
                    const acts = await api.getAnnouncements();
                    setAnnouncements(acts);
                    if (session.user.role === 'ADMIN') {
                        const [pending, approved] = await Promise.all([
                            api.getPendingUsers(),
                            api.getApprovedUsers()
                        ]);
                        setUsers([...pending, ...approved]);
                    }
                }
            } catch (error) {
                console.error("Failed to load data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        init();


    }, []);

    const contextValue = useMemo(() => ({
        currentUser,
        users,
        surveys,
        announcements,
        fetchAnnouncements: async () => {
            const acts = await api.getAnnouncements();
            setAnnouncements(acts);
        },
        memberLogin: async (email: string, password?: string) => {
            try {
                const res = await api.login(email, password) as unknown as { token: string, user: User };
                if (res.token && res.user && res.user.role === 'MEMBER') {
                    setCurrentUser(res.user);
                    saveSession(res.token, res.user);
                    return { success: true };
                }
                return { success: false, error: 'Access denied. Only members can login here.' };
            } catch (err: any) {
                if (err.message?.includes('pending approval')) {
                    return { success: false, pending: true };
                }
                return { success: false, error: err.message || 'Login failed' };
            }
        },
        adminLogin: async (email: string, password?: string) => {
            try {
                const res = await api.login(email, password) as unknown as { token: string, user: User };
                if (res.token && res.user && res.user.role === 'ADMIN') {
                    setCurrentUser(res.user);
                    saveSession(res.token, res.user);
                    const [pending, approved] = await Promise.all([
                        api.getPendingUsers(),
                        api.getApprovedUsers()
                    ]);
                    setUsers([...pending, ...approved]);
                    return { success: true };
                }
                return { success: false, error: 'Access denied. Only admins can login here.' };
            } catch (err: any) {
                return { success: false, error: err.message || 'Admin login failed' };
            }
        },
        logout: () => {
            setCurrentUser(null);
            clearSession();
        },
        register: async (newUser: Omit<User, 'id' | 'role'>) => {
            await api.register(newUser);
            return true;
        },
        approveRegistration: async (id: string) => {
            await api.approveUser(id);
            setUsers(prev => prev.map(u => u.id === id ? { ...u, role: UserRole.MEMBER } : u));
        },
        rejectRegistration: async (id: string) => {
            await api.rejectUser(id);
            setUsers(prev => prev.filter(u => u.id !== id));
        },
        createSurvey: async (surveyData: Omit<Survey, 'id' | 'votes'>) => {
            const newSurvey = await api.createSurvey({ ...surveyData, votes: {} });
            setSurveys(prev => [newSurvey as Survey, ...prev]);
        },
        deleteSurvey: async (id: string) => {
            await api.deleteSurvey(id);
            setSurveys(prev => prev.filter(s => s.id !== id));
        },
        submitVote: async (surveyId: string, optionId: string) => {
            if (!currentUser) return;
            const survey = surveys.find(s => s.id === surveyId);
            if (!survey || survey.votes[currentUser.id]) return;
            const newVotes = { ...survey.votes, [currentUser.id]: optionId };
            await api.updateSurvey(surveyId, { votes: newVotes });
            setSurveys(prev => prev.map(s => {
                if (s.id === surveyId) {
                    return { ...s, votes: newVotes };
                }
                return s;
            }));
        },
        createAnnouncement: async (title: string, content: string, driveAttachment?: Announcement['attachment'] | null) => {
            const res = await api.createAnnouncement({ title, content, attachment: driveAttachment ?? undefined });
            setAnnouncements(prev => [res as Announcement, ...prev]);
        },
        updateAnnouncement: async (id: string, title: string, content: string) => {
            await api.updateAnnouncement(id, { title, content });
            setAnnouncements(prev => prev.map(ann => ann.id === id ? { ...ann, title, content } : ann));
        },
        deleteAnnouncement: async (announcementId: string) => {
            await api.deleteAnnouncement(announcementId);
            setAnnouncements(prev => prev.filter(ann => ann.id !== announcementId));
        },
    }), [currentUser, users, surveys, announcements]);

    const renderContent = () => {
        if (!currentUser) {
            if (showAuth) return <Auth onBack={() => setShowAuth(false)} />;
            return <LandingPage onLoginClick={() => setShowAuth(true)} />;
        }

        switch (currentUser.role) {
            case UserRole.ADMIN: return <AdminDashboard />;
            case UserRole.MEMBER: return <MemberDashboard />;
            default: return <Auth onBack={() => setShowAuth(false)} />;
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-green-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    return (
        <AppContext.Provider value={contextValue}>
            <div className="min-h-screen font-sans bg-gray-50/30">
                <Header />
                <main className="container mx-auto p-4 md:p-8">
                    <Suspense fallback={
                        <div className="min-h-[50vh] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                        </div>
                    }>
                        {renderContent()}
                    </Suspense>
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
