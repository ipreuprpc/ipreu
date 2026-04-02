import React, { useState, createContext, useContext, useMemo, useEffect } from 'react';
import { User, Survey, UserRole, Announcement } from './types';
import Header from './components/Header';
import Auth from './components/Auth';
import AdminDashboard from './components/AdminDashboard';
import MemberDashboard from './components/MemberDashboard';
import {
    loadSurveys, saveSurveys,
    loadSession, saveSession, clearSession,
    api
} from './services/storage';

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
    memberLogin: (email: string, password?: string) => Promise<boolean>;
    adminLogin: (email: string, password?: string) => Promise<boolean>;
    logout: () => void;
    register: (newUser: Omit<User, 'id' | 'role'>) => Promise<boolean>;
    approveRegistration: (id: string) => Promise<void>;
    rejectRegistration: (id: string) => Promise<void>;
    createSurvey: (survey: Omit<Survey, 'id' | 'votes'>) => void;
    submitVote: (surveyId: string, optionId: string) => void;
    getUserStatus: (email: string) => Promise<{ status: UserRole | 'NOT_FOUND'; user: User | null }>;
    createAnnouncement: (title: string, content: string, file?: File | null) => Promise<void>;
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
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [surveys, setSurveys] = useState<Survey[]>([]);
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const init = async () => {
            try {
                const loadedSurveys = await loadSurveys();
                if (loadedSurveys.length > 0) setSurveys(loadedSurveys);
                else {
                    setSurveys(initialSurveys);
                    await saveSurveys(initialSurveys);
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

    useEffect(() => {
        if (!isLoading) saveSurveys(surveys);
    }, [surveys, isLoading]);

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
            const res = await api.login(email, password);
            if (res.token && res.user && res.user.role === 'MEMBER') {
                setCurrentUser(res.user);
                saveSession(res.token, res.user);
                return true;
            }
            return false;
        },
        adminLogin: async (email: string, password?: string) => {
            const res = await api.login(email, password);
            if (res.token && res.user && res.user.role === 'ADMIN') {
                setCurrentUser(res.user);
                saveSession(res.token, res.user);
                const [pending, approved] = await Promise.all([
                    api.getPendingUsers(),
                    api.getApprovedUsers()
                ]);
                setUsers([...pending, ...approved]);
                return true;
            }
            return false;
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
        createSurvey: (surveyData: Omit<Survey, 'id' | 'votes'>) => {
            const newSurvey: Survey = {
                ...surveyData,
                id: `survey-${Date.now()}`,
                votes: {},
            };
            setSurveys(prev => [newSurvey, ...prev]);
        },
        submitVote: (surveyId: string, optionId: string) => {
            if (!currentUser) return;
            setSurveys(prev => prev.map(s => {
                if (s.id === surveyId && !s.votes[currentUser.id]) {
                    const newVotes = { ...s.votes, [currentUser.id]: optionId };
                    return { ...s, votes: newVotes };
                }
                return s;
            }));
        },
        getUserStatus: async (email: string) => {
            try {
                const res = await api.getStatus(email);
                return { status: res.status as UserRole, user: res.user };
            } catch (e: any) {
                if (e.message === 'NOT_FOUND') return { status: 'NOT_FOUND' as const, user: null };
                throw e;
            }
        },
        createAnnouncement: async (title: string, content: string, file?: File | null) => {
            let attachmentData: Announcement['attachment'] | undefined = undefined;
            if (file) {
                const dataUrl = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = (error) => reject(error);
                    reader.readAsDataURL(file);
                });
                attachmentData = { name: file.name, type: file.type, dataUrl: dataUrl };
            }
            const res = await api.createAnnouncement({ title, content, attachment: attachmentData });
            setAnnouncements(prev => [res, ...prev]);
        },
        deleteAnnouncement: async (announcementId: string) => {
            await api.deleteAnnouncement(announcementId);
            setAnnouncements(prev => prev.filter(ann => ann.id !== announcementId));
        },
    }), [currentUser, users, surveys, announcements]);

    const renderContent = () => {
        if (!currentUser) return <Auth />;
        switch (currentUser.role) {
            case UserRole.ADMIN: return <AdminDashboard />;
            case UserRole.MEMBER: return <MemberDashboard />;
            default: return <Auth />;
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
            <div className="min-h-screen font-sans">
                <Header />
                <main className="container mx-auto p-4 md:p-8">
                    {renderContent()}
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
