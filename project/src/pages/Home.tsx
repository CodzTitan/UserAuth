import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, UserPlus, LogIn } from 'lucide-react';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Secure Authentication System
        </h1>
        <p className="text-xl text-gray-600">
          A complete authentication solution with email verification and secure sessions
        </p>
      </div>

      {!isAuthenticated && (
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <UserPlus size={20} className="mr-2" />
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <LogIn size={20} className="mr-2" />
            Login
          </Link>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 mb-4">
            <Shield size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
          <p className="text-gray-600">
            Passwords are securely hashed using bcrypt and all sessions are protected with JWT tokens.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-7 10 7-10 7z"></path>
              <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5"></path>
              <path d="M12 19v-9"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Verification</h3>
          <p className="text-gray-600">
            OTP-based email verification ensures that only real users can create accounts.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
          <p className="text-gray-600">
            MongoDB Atlas securely stores user data with proper validation and security measures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;