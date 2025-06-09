import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn, signUp } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(email, password);
        onClose();
      } else {
        await signUp(email, password, {
          full_name: fullName,
          role
        });
        setSuccess('Registration successful! Please check your email to confirm your account.');
        // Don't close the modal, show the success message instead
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResendConfirmation = async () => {
    try {
      setLoading(true);
      await authService.resendConfirmationEmail(email);
      setSuccess('Confirmation email has been resent. Please check your inbox.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-text-primary bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-cta-text rounded-lg max-w-md w-full p-6 relative border border-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-primary hover:text-heading"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-heading">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 border border-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-highlight text-text-primary p-3 rounded-md mb-4 border border-border">
            {success}
            <button
              onClick={handleResendConfirmation}
              className="text-cta hover:text-heading underline ml-2"
            >
              Resend confirmation email
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-cta bg-bg-primary text-text-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-cta bg-bg-primary text-text-primary"
                >
                  <option value="user">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="publisher">Publisher</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-cta bg-bg-primary text-text-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-cta bg-bg-primary text-text-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-cta-text font-medium ${
              loading
                ? 'bg-cta opacity-60 cursor-not-allowed'
                : 'bg-cta hover:bg-opacity-90'
            }`}
          >
            {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setSuccess('');
            }}
            className="text-cta hover:text-heading"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}