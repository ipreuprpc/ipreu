import React, { useState, createContext, useContext, useMemo, useEffect, Suspense, lazy } from 'react';
import { User, Survey, UserRole, Announcement, CalendarEvent, Grievance } from './types';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import BottomNav from './components/BottomNav';
import BrandingBadge from './components/BrandingBadge';
import ErrorBoundary from './components/ErrorBoundary';
import {
    loadSession, saveSession, clearSession,
    api, messaging, db
} from './services/storage';
import { getToken, onMessage } from 'firebase/messaging';
import { collection, query, orderBy, onSnapshot, where, limit } from 'firebase/firestore';

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
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    users: User[];
    surveys: Survey[];
    announcements: Announcement[];
    calendarEvents: CalendarEvent[];
    grievances: Grievance[];
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
    createCalendarEvent: (event: Omit<CalendarEvent, 'id' | 'createdAt'>) => Promise<void>;
    deleteCalendarEvent: (id: string) => Promise<void>;
    submitGrievance: (subject: string, description: string, category: string) => Promise<void>;
    respondToGrievance: (id: string, response: string) => Promise<void>;
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
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [surveys, setSurveys] = useState<Survey[]>([]);
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
    const [grievances, setGrievances] = useState<Grievance[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [activeTab, setActiveTab] = useState('dashboard');

    React.useLayoutEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        const titleMap: Record<string, string> = {
            'dashboard': 'My Dashboard | IPREU',
            'calendar': 'Union Calendar | IPREU',
            'grievances': 'Secure Grievances | IPREU',
            'overview': 'Admin Overview | IPREU',
            'members': 'Manage Users | IPREU',
            'announcements': 'Broadcast | IPREU',
        };
        document.title = titleMap[activeTab] || 'IPREU Union Connect';
    }, [activeTab]);

    useEffect(() => {
        const init = async () => {
            try {
                const session = loadSession();
                if (session && session.user) {
                    setCurrentUser(session.user);
                    registerFCM(session.user.id);
                }
            } catch (error) {
                console.error("Session init failed:", error);
            } finally {
                setIsLoading(false);
            }
        };
        init();
    }, []);

    // Real-time Data Listeners
    useEffect(() => {
        if (!currentUser) return;

        // Announcements Listener
        const qAnn = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'), limit(30));
        const unsubAnn = onSnapshot(qAnn, (snapshot) => {
            setAnnouncements(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Announcement[]);
        }, (err) => console.error("Announcements Sync Error:", err));

        // Surveys Listener
        const qSurv = query(collection(db, 'surveys'));
        const unsubSurv = onSnapshot(qSurv, (snapshot) => {
            setSurveys(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Survey[]);
        }, (err) => console.error("Surveys Sync Error:", err));

        // Calendar Listener
        const qCal = query(collection(db, 'calendar'), orderBy('date', 'asc'));
        const unsubCal = onSnapshot(qCal, (snapshot) => {
            setCalendarEvents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as CalendarEvent[]);
        }, (err) => console.error("Calendar Sync Error:", err));

        // Grievances Listener (Member sees only theirs, Admin sees all)
        let qGriv;
        if (currentUser.role === 'ADMIN') {
            qGriv = query(collection(db, 'grievances'), orderBy('createdAt', 'desc'));
        } else {
            qGriv = query(collection(db, 'grievances'), where('userId', '==', currentUser.id), orderBy('createdAt', 'desc'));
        }
        const unsubGriv = onSnapshot(qGriv, (snapshot) => {
            setGrievances(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Grievance[]);
        }, (err) => console.error("Grievances Sync Error:", err));

        // Admin: Users Listener
        let unsubUsers = () => {};
        if (currentUser.role === 'ADMIN') {
            const qUsers = query(collection(db, 'users'));
            unsubUsers = onSnapshot(qUsers, (snapshot) => {
                setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[]);
            });
        }

        return () => {
            unsubAnn();
            unsubSurv();
            unsubCal();
            unsubGriv();
            unsubUsers();
        };
    }, [currentUser?.id]);

    const registerFCM = async (userId: string) => {
        if (!messaging) return;
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const token = await getToken(messaging, {
                    vapidKey: 'BKZqsvNJwZbljTyY0T6ho_GruW2LiC8WBEre2uMqg6A-67sBHoF2RIg6VCX2BLMs0LVolggQTCap4zwDgedyKjI'
                });
                if (token) {
                    await api.saveFcmToken(userId, token);
                }
            }
        } catch (error) {
            console.error("FCM Registration failed:", error);
        }
    };

    useEffect(() => {
        if (!messaging) return;
        const unsubscribe = onMessage(messaging, (payload) => {
            alert(`Notification: ${payload.notification?.title}\n${payload.notification?.body}`);
        });
        return () => unsubscribe();
    }, []);

    const contextValue = useMemo(() => ({
        currentUser: currentUser,
        isDarkMode: isDarkMode,
        toggleDarkMode: () => setIsDarkMode(prev => !prev),
        users: users,
        surveys: surveys,
        announcements: announcements,
        calendarEvents: calendarEvents,
        grievances: grievances,
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
            if (!survey) return;
            // Support re-voting by overwriting the specific user's choice in the votes map
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
        createCalendarEvent: async (event: Omit<CalendarEvent, 'id' | 'createdAt'>) => {
            const res = await api.createCalendarEvent({ ...event, createdAt: new Date().toISOString() });
            setCalendarEvents(prev => [...prev, res as CalendarEvent]);
        },
        deleteCalendarEvent: async (id: string) => {
            await api.deleteCalendarEvent(id);
            setCalendarEvents(prev => prev.filter(e => e.id !== id));
        },
        submitGrievance: async (subject: string, description: string, category: string) => {
            if (!currentUser) return;
            const newGrievance: Omit<Grievance, 'id'> = {
                userId: currentUser.id,
                userName: currentUser.employeeName,
                subject,
                description,
                category,
                status: 'NEW',
                createdAt: new Date().toISOString()
            };
            const res = await api.createGrievance(newGrievance);
            setGrievances(prev => [res as Grievance, ...prev]);
        },
        respondToGrievance: async (id: string, response: string) => {
            const updates = { response, respondedAt: new Date().toISOString(), status: 'RESOLVED' as const };
            await api.updateGrievance(id, updates);
            setGrievances(prev => prev.map(g => g.id === id ? { ...g, ...updates } : g));
        },
    }), [currentUser, users, surveys, announcements, calendarEvents, grievances, isDarkMode]);

    const renderContent = () => {
        if (!currentUser) {
            if (showAuth) return <Auth onBack={() => setShowAuth(false)} />;
            return <LandingPage onLoginClick={() => setShowAuth(true)} />;
        }

        switch (currentUser.role) {
            case UserRole.ADMIN: return <AdminDashboard activeTab={activeTab as any} setActiveTab={setActiveTab} />;
            case UserRole.MEMBER: return <MemberDashboard activeTab={activeTab} setActiveTab={setActiveTab} />;
            default: return <Auth onBack={() => setShowAuth(false)} />;
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    return (
        <AppContext.Provider value={contextValue}>
            <div className="min-h-screen font-sans bg-gray-50/30 dark:bg-gray-950 transition-colors duration-300">
                <Header />
                <main className="container mx-auto p-4 md:p-8 pb-32">
                    <Suspense fallback={
                        <div className="min-h-[50vh] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
                        </div>
                    }>
                        {renderContent()}
                    </Suspense>
                </main>
                {currentUser && (
                    <footer className="w-full py-12 bg-white/5 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800 backdrop-blur-sm mt-auto">
                        <div className="container mx-auto px-4">
                            <BrandingBadge />
                        </div>
                    </footer>
                )}
            </div>
        </AppContext.Provider>
    );
}

export default App;
