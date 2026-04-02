import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where, orderBy, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSy_mock_key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mock.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mock",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mock.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123:web:abc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const STORAGE_KEY = 'uc_token';
const USER_KEY = 'uc_user';

export function saveSession(token: string, user: any) {
  try {
    localStorage.setItem(STORAGE_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.error('Failed to save session', e);
  }
}

export function loadSession(): { token: string | null, user: any | null } {
  try {
    const token = localStorage.getItem(STORAGE_KEY);
    const userStr = localStorage.getItem(USER_KEY);
    return { token, user: userStr ? JSON.parse(userStr) : null };
  } catch (e) {
    return { token: null, user: null };
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(USER_KEY);
    signOut(auth).catch(console.error);
  } catch (e) {
    console.error('Failed to clear session', e);
  }
}

export const api = {
  login: async (email: string, password?: string) => {
    if (!password) throw new Error("Password required");

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
    if (!userDoc.exists()) {
      await signOut(auth);
      throw new Error("User record not found in database.");
    }

    const userData = { id: userDoc.id, ...userDoc.data() };

    if (userData.role === 'PENDING') {
      await signOut(auth);
      throw new Error("Your application is still pending approval. Please check back later.");
    }

    const token = await userCredential.user.getIdToken();
    return { token, user: userData };
  },

  register: async (userData: any) => {
    if (!userData.password) throw new Error("Password required");
    if (!userData.email) throw new Error("Email required");

    // Ensure email isn't already used
    const q = query(collection(db, 'users'), where('email', '==', userData.email.toLowerCase()));
    const snap = await getDocs(q);
    if (!snap.empty) throw new Error("An account with this email already exists.");

    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);

    const { password, ...detailsToSave } = userData;
    detailsToSave.email = userData.email.toLowerCase();

    await setDoc(doc(db, 'users', userCredential.user.uid), {
      ...detailsToSave,
      role: 'PENDING',
      createdAt: new Date().toISOString()
    });

    await signOut(auth);
    return true;
  },

  getStatus: async (email: string) => {
    const q = query(collection(db, 'users'), where('email', '==', email.toLowerCase()));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return { status: 'NOT_FOUND', user: null };
    const data = snapshot.docs[0].data();
    return { status: data.role, user: { id: snapshot.docs[0].id, ...data } };
  },

  getAnnouncements: async () => {
    const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  createAnnouncement: async (announcement: any) => {
    const docRef = await addDoc(collection(db, 'announcements'), {
      ...announcement,
      createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...announcement };
  },
  deleteAnnouncement: async (id: string) => {
    await deleteDoc(doc(db, 'announcements', id));
    return true;
  },
  getPendingUsers: async () => {
    const q = query(collection(db, 'users'), where('role', '==', 'PENDING'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  getApprovedUsers: async () => {
    const q = query(collection(db, 'users'), where('role', '==', 'MEMBER'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  approveUser: async (id: string) => {
    await updateDoc(doc(db, 'users', id), { role: 'MEMBER' });
    return true;
  },
  rejectUser: async (id: string) => {
    await deleteDoc(doc(db, 'users', id));
    return true;
  }
};

const mockSurveysKey = 'uc_mock_surveys';
export const initDB = async () => { };
export const loadSurveys = async () => JSON.parse(localStorage.getItem(mockSurveysKey) || '[]');
export const saveSurveys = async (s: any) => localStorage.setItem(mockSurveysKey, JSON.stringify(s));
export const enqueueSync = async () => { };
