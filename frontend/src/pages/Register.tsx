import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../lib/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  sendEmailVerification,
  UserCredential,
} from 'firebase/auth';
import { Eye, EyeOff, Loader2, Mail, User, Lock, Linkedin } from 'lucide-react';

const auth = getAuth();

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.fullName.trim()) return 'Full name is required.';
    if (!form.email.trim()) return 'Email is required.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Invalid email address.';
    if (form.password.length < 6) return 'Password must be at least 6 characters.';
    if (form.password !== form.confirmPassword) return 'Passwords do not match.';
    if (!acceptTerms) return 'You must accept the Terms & Conditions.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, { displayName: form.fullName });
      await sendEmailVerification(userCredential.user);
      setSuccess('Registration successful! Please check your email to verify your account.');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err: any) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleProvider = async (provider: 'google' | 'linkedin') => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      let prov;
      if (provider === 'google') {
        prov = new GoogleAuthProvider();
      } else {
        prov = new OAuthProvider('linkedin.com');
        prov.addScope('r_liteprofile');
        prov.addScope('r_emailaddress');
      }
      const result = await signInWithPopup(auth, prov) as UserCredential & {
        additionalUserInfo?: {
          isNewUser?: boolean;
          profile?: {
            name?: string;
          };
        };
      };
      
      if (result.additionalUserInfo?.isNewUser) {
        const user = result.user;
        const displayName = result.additionalUserInfo.profile?.name || user.displayName;
        if (displayName) {
          await updateProfile(user, { displayName });
        }
      }
      
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Authentication error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in was cancelled. Please try again.');
      } else if (err.code === 'auth/popup-blocked') {
        setError('Pop-up was blocked by your browser. Please allow pop-ups for this site.');
      } else {
        setError(err.message || 'Authentication failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted px-4 py-8">
      <div className="w-full max-w-md rounded-xl bg-background p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Create your account</h2>
        {error && (
          <div className="mb-4 rounded bg-red-100 px-4 py-2 text-sm text-red-700">{error}</div>
        )}
        {success && (
          <div className="mb-4 rounded bg-green-100 px-4 py-2 text-sm text-green-700">{success}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-muted/30 py-2 pl-10 pr-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-muted/30 py-2 pl-10 pr-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="you@email.com"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-muted/30 py-2 pl-10 pr-10 text-sm focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="Password"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-muted/30 py-2 pl-10 pr-10 text-sm focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="Confirm password"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                onClick={() => setShowConfirm((v) => !v)}
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={e => setAcceptTerms(e.target.checked)}
              className="accent-primary"
              required
            />
            <label htmlFor="terms" className="text-xs">
              I accept the <Link to="/terms" className="underline text-primary">Terms & Conditions</Link>
            </label>
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? <Loader2 className="mx-auto h-5 w-5 animate-spin" /> : 'Register'}
          </button>
        </form>
        <div className="my-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          or sign up with
          <span className="h-px w-8 bg-border" />
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleProvider('google')}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-white py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
            disabled={loading}
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            Sign up with Google
          </button>
          <button
            onClick={() => handleProvider('linkedin')}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-[#0077B5] py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#006399]"
            disabled={loading}
          >
            <Linkedin size={18} />
            Sign up with LinkedIn
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}