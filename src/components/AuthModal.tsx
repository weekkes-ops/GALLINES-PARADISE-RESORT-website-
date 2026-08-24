import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Lock, User, Sparkles, LogIn, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { signInWithGoogle, signInEmail, signUpEmail } = useAuth();
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isSignUp) {
        if (!displayName) {
          setError('Please provide your name');
          setLoading(false);
          return;
        }
        await signUpEmail(email, password, displayName);
      } else {
        await signInEmail(email, password);
      }
      onSuccess?.();
      onClose();
    } catch (err: any) {
      console.error('Authentication error:', err);
      setError(err.message || 'Authentication failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      onSuccess?.();
      onClose();
    } catch (err: any) {
      console.error('Google login error:', err);
      setError(err.message || 'Google sign in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#ffffff] text-[#2d2d2a] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-[#d8d4c7] relative">
        
        {/* Header */}
        <div className="p-6 bg-[#f8f7f2] border-b border-[#e3dfd6] text-center relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#ede9dc] hover:bg-[#e0dbcd] text-[#2d2d2a] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-[#4a5340] text-[#f8f7f2] flex items-center justify-center mx-auto mb-3 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          
          <h3 className="font-display font-bold text-xl text-[#2d2d2a]">
            {isSignUp ? 'Create Guest or Staff Account' : 'Resort Sign In & Portal'}
          </h3>
          <p className="text-xs text-[#686762] mt-1">
            Access administrator controls, manage blog publications, and view reservation history.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Quick Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] hover:bg-[#ede9dc] text-xs font-bold text-[#2d2d2a] flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer disabled:opacity-60"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center gap-3 my-2">
            <div className="h-px flex-1 bg-[#e3dfd6]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#686762]">
              or with email
            </span>
            <div className="h-px flex-1 bg-[#e3dfd6]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#686762]" />
                  <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="e.g. Melissa Nabieu"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#faf9f5] text-xs font-medium focus:bg-[#ffffff] focus:ring-2 focus:ring-[#4a5340]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#686762]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gallinesparadise.com"
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#faf9f5] text-xs font-medium focus:bg-[#ffffff] focus:ring-2 focus:ring-[#4a5340]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2d2d2a] mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#686762]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#d8d4c7] bg-[#faf9f5] text-xs font-medium focus:bg-[#ffffff] focus:ring-2 focus:ring-[#4a5340]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              <LogIn className="w-4 h-4" />
              <span>{loading ? 'Authenticating...' : isSignUp ? 'Create Account' : 'Sign In'}</span>
            </button>
          </form>

          {/* Toggle Sign Up / Sign In */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
              }}
              className="text-xs text-[#4a5340] font-bold hover:underline"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
