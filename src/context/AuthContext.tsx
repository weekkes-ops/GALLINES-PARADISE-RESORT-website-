import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import { auth, googleProvider, db } from '../lib/firebase';
import { UserProfile, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  isStaff: boolean;
  signInWithGoogle: () => Promise<void>;
  signInEmail: (email: string, pass: string) => Promise<void>;
  signUpEmail: (email: string, pass: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin email configured or default primary admin
const PRIMARY_ADMIN_EMAIL = 'nabieumelissajosephine@gmail.com';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOrCreateProfile = async (firebaseUser: User) => {
    try {
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      const isPrimaryAdmin = firebaseUser.email?.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase();

      if (userDocSnap.exists()) {
        const data = userDocSnap.data() as UserProfile;
        
        // Auto-grant admin to the designated primary admin account
        if (isPrimaryAdmin && data.role !== 'admin') {
          await updateDoc(userDocRef, {
            role: 'admin',
            lastLoginAt: new Date().toISOString()
          });
          setProfile({ ...data, role: 'admin' });
        } else {
          await updateDoc(userDocRef, {
            lastLoginAt: new Date().toISOString()
          });
          setProfile(data);
        }
      } else {
        // Create new user profile document
        const newProfile: UserProfile = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || (firebaseUser.email ? firebaseUser.email.split('@')[0] : 'Guest User'),
          photoURL: firebaseUser.photoURL || '',
          role: isPrimaryAdmin ? 'admin' : 'guest',
          status: 'active',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString()
        };

        await setDoc(userDocRef, newProfile);
        setProfile(newProfile);
      }
    } catch (err) {
      console.error('Error fetching/creating user profile in Firestore:', err);
      // Fallback local state if firestore read is delayed
      const isPrimaryAdmin = firebaseUser.email?.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase();
      setProfile({
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || 'Guest User',
        role: isPrimaryAdmin ? 'admin' : 'guest',
        status: 'active',
        createdAt: new Date().toISOString()
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await fetchOrCreateProfile(firebaseUser);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const refreshProfile = async () => {
    if (user) {
      await fetchOrCreateProfile(user);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        await fetchOrCreateProfile(result.user);
      }
    } catch (error: any) {
      console.error('Google Sign In Error:', error);
      throw error;
    }
  };

  const signInEmail = async (email: string, pass: string) => {
    const result = await signInWithEmailAndPassword(auth, email, pass);
    if (result.user) {
      await fetchOrCreateProfile(result.user);
    }
  };

  const signUpEmail = async (email: string, pass: string, name: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    if (result.user) {
      await updateProfile(result.user, { displayName: name });
      await fetchOrCreateProfile({ ...result.user, displayName: name });
    }
  };

  const signOut = async () => {
    await fbSignOut(auth);
    setUser(null);
    setProfile(null);
  };

  const isAdmin = profile?.role === 'admin' || user?.email?.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase();
  const isStaff = isAdmin || profile?.role === 'staff';

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isAdmin: !!isAdmin,
        isStaff: !!isStaff,
        signInWithGoogle,
        signInEmail,
        signUpEmail,
        signOut,
        refreshProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
