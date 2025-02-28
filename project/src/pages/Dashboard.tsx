import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <User size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Welcome!</h3>
              <p className="text-gray-600">You've successfully logged in to your account</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Profile</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail size={20} className="text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar size={20} className="text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Account Status</p>
                <p className="font-medium">
                  {user?.isVerified ? (
                    <span className="text-green-600">Verified</span>
                  ) : (
                    <span className="text-yellow-600">Pending Verification</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">System Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• React with TypeScript</li>
              <li>• Tailwind CSS for styling</li>
              <li>• React Router for navigation</li>
              <li>• Context API for state management</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-700 mb-2">Backend</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Node.js with Express</li>
              <li>• MongoDB for data storage</li>
              <li>• JWT for authentication</li>
              <li>• SendGrid for email services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;