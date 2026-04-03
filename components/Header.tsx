import React from 'react';
import { useAppContext } from '../App';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { UserRole } from '../types';

const Header: React.FC = () => {
  const { currentUser, logout } = useAppContext();

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserGroupIcon className="h-8 w-8 text-orange-600 animate-fade-in" />
            <h1 className="text-xl md:text-2xl font-display font-bold text-gray-800 tracking-tight">
              Union Connect <span className="text-orange-600">Portal</span>
            </h1>
          </div>
          {currentUser && (
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="hidden sm:flex flex-col items-end">
                 <span className="text-sm text-gray-600 leading-tight">
                   Welcome, <span className="font-semibold text-gray-900">{currentUser.employeeName}</span>
                 </span>
                 <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mt-0.5 ${
                    currentUser.role === UserRole.ADMIN 
                      ? 'bg-rose-100 text-rose-700 border border-rose-200 shadow-sm' 
                      : 'bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-sm'
                 }`}>
                    {currentUser.role}
                 </span>
              </div>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 border border-transparent rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:-translate-y-0.5"
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