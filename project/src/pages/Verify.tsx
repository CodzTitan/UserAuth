import React, { useState, FormEvent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

interface LocationState {
  email?: string;
}

const Verify: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { verifyEmail, resendOtp, error, clearError, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  useEffect(() => {
    // Get email from location state (passed from signup page)
    if (state && state.email) {
      setEmail(state.email);
    } else {
      // If no email in state, redirect to signup
      navigate('/signup');
    }
  }, [state, navigate]);

  useEffect(() => {
    // Countdown timer for resend button
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError('');
    clearError();

    // Basic validation
    if (!otp) {
      setFormError('Please enter the verification code');
      return;
    }

    try {
      await verifyEmail(email, otp);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled in the auth context
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp(email);
      setResendDisabled(true);
      setCountdown(60); // Disable resend for 60 seconds
    } catch (err) {
      // Error is handled in the auth context
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Verify Your Email</h2>
        <p className="text-center text-gray-600 mb-6">
          We've sent a verification code to {email}
        </p>
        
        {(error || formError) && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 flex items-start">
            <AlertCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
            <span>{error || formError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">
              Verification Code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter 6-digit code"
              maxLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </span>
            ) : (
              'Verify Email'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">
            Didn't receive the code?
          </p>
          <button
            onClick={handleResendOtp}
            disabled={resendDisabled || loading}
            className="text-blue-600 hover:underline flex items-center justify-center mx-auto disabled:opacity-50 disabled:hover:no-underline"
          >
            <RefreshCw size={16} className="mr-1" />
            {resendDisabled 
              ? `Resend code (${countdown}s)` 
              : 'Resend verification code'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;