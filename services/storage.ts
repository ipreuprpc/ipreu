import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where, orderBy, addDoc, limit, increment } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
export const storage = getStorage(app);
export const messaging = typeof window !== 'undefined' ? getMessaging(app) : null;


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

    const userData = { id: userDoc.id, ...userDoc.data() } as any;

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

    const email = userData.email.toLowerCase().trim();
    const userCredential = await createUserWithEmailAndPassword(auth, email, userData.password);

    const { password, ...detailsToSave } = userData;
    detailsToSave.email = email;

    await setDoc(doc(db, 'users', userCredential.user.uid), {
      ...detailsToSave,
      role: 'PENDING',
      createdAt: new Date().toISOString()
    });

    await signOut(auth);
    return true;
  },

  getAnnouncements: async () => {
    // Limits fetching to 30 most recent announcements to drastically save read limits on dashboard loads
    const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'), limit(30));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  createAnnouncement: async (announcement: any) => {
    const createdAt = new Date().toISOString();
    const docRef = await addDoc(collection(db, 'announcements'), {
      ...announcement,
      createdAt,
    });
    // Update public stats count
    await setDoc(doc(db, 'stats', 'totals'), { announcementCount: increment(1) }, { merge: true });
    return { id: docRef.id, ...announcement, createdAt };
  },
  deleteAnnouncement: async (id: string) => {
    await deleteDoc(doc(db, 'announcements', id));
    return true;
  },
  updateAnnouncement: async (id: string, updates: any) => {
    await updateDoc(doc(db, 'announcements', id), updates);
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
  rejectUser: async (id: string) => {
    await deleteDoc(doc(db, 'users', id));
    return true;
  },
  approveUser: async (id: string, memberNo: string) => {
    const userRef = doc(db, 'users', id);
    await updateDoc(userRef, { 
      role: 'MEMBER',
      memberNo: memberNo
    });
    // Update public stats count for members
    await setDoc(doc(db, 'stats', 'totals'), { memberCount: increment(1) }, { merge: true });
    return true;
  },
  getSurveys: async () => {
    const q = query(collection(db, 'surveys'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  createSurvey: async (survey: any) => {
    const docRef = await addDoc(collection(db, 'surveys'), survey);
    return { id: docRef.id, ...survey };
  },
  deleteSurvey: async (id: string) => {
    await deleteDoc(doc(db, 'surveys', id));
    return true;
  },
  updateSurvey: async (id: string, updates: any) => {
    await updateDoc(doc(db, 'surveys', id), updates);
    return true;
  },
  getCalendarEvents: async () => {
    const q = query(collection(db, 'calendar'), orderBy('date', 'asc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  createCalendarEvent: async (event: any) => {
    const docRef = await addDoc(collection(db, 'calendar'), event);
    return { id: docRef.id, ...event };
  },
  deleteCalendarEvent: async (id: string) => {
    await deleteDoc(doc(db, 'calendar', id));
    return true;
  },
  getGrievances: async (userId?: string) => {
    let q;
    const grievancesRef = collection(db, 'grievances');
    if (userId) {
      q = query(grievancesRef, where('userId', '==', userId), orderBy('createdAt', 'desc'));
    } else {
      q = query(grievancesRef, orderBy('createdAt', 'desc'));
    }
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) }));
  },
  createGrievance: async (grievance: any) => {
    const docRef = await addDoc(collection(db, 'grievances'), grievance);
    return { id: docRef.id, ...grievance };
  },
  updateGrievance: async (id: string, updates: any) => {
    await updateDoc(doc(db, 'grievances', id), updates);
    return true;
  },
  saveFcmToken: async (userId: string, token: string) => {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, { fcmToken: token });
  },
  
  
  compressImage: (file: Blob): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800; // Perfect for Digital ID Cards
        const scale = MAX_WIDTH / img.width;
        if (scale < 1) {
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scale;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Image compression failed"));
        }, 'image/jpeg', 0.7); // High quality, low file size
        URL.revokeObjectURL(img.src);
      };
      img.onerror = () => reject(new Error("Could not load image for optimization"));
    });
  },

  uploadToCloudinary: async (file: Blob) => {
    // Senior Level Optimization: Compress massive mobile photos (>200KB) before upload
    let optimizedFile = file;
    if (file.size > 200 * 1024) { 
        try {
            optimizedFile = await api.compressImage(file);
        } catch (compressErr) {
            console.error("Compression failed, uploading original:", compressErr);
            // Fallback: upload original if compression fails for some reason
        }
    }

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    
    if (!cloudName || cloudName === "your_cloud_name_here") {
      throw new Error("Cloudinary configuration error. Please check your admin setup.");
    }

    const formData = new FormData();
    formData.append('file', optimizedFile);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'ipreu_registrations');

    // 30-Second Timeout Protection (AbortController)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
                method: 'POST',
                body: formData,
                signal: controller.signal
            }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || "Failed to upload to Cloudinary");
        }

        const data = await response.json();
        return data.secure_url;
    } catch (err: any) {
        if (err.name === 'AbortError') {
            throw new Error("Connection timed out. Please check your internet and try again.");
        }
        throw err;
    } finally {
        if (timeoutId) clearTimeout(timeoutId);
    }
  }
};

export const initDB = async () => { };
export const enqueueSync = async () => { };
