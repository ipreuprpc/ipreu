import React from 'react';
import { useAppContext } from '../App';
import { UserGroupIcon } from './icons/UserGroupIcon';

const Header: React.FC = () => {
  const { currentUser, logout } = useAppContext();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserGroupIcon className="h-8 w-8 text-orange-600" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Union Connect Portal
            </h1>
          </div>
          {currentUser && (
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-sm text-gray-600">
                Welcome, <span className="font-medium">{currentUser.employeeName}</span>
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;