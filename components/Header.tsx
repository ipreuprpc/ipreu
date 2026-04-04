import React from 'react';
import { useAppContext } from '../App';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { UserRole } from '../types';

const Header: React.FC = () => {
  const { currentUser, logout, isDarkMode, toggleDarkMode } = useAppContext();

  return (
    <header className="sticky top-0 z-40 glass-nav dark:bg-black/90 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <UserGroupIcon className="h-10 w-10 text-[#014737] dark:text-[#00c4a7] animate-fade-in group-hover:scale-110 transition-transform" />
            <h1 className="text-2xl md:text-3xl font-display font-black text-[#014737] dark:text-[#00c4a7] tracking-tighter">
              Union Connect <span className="text-orange-600">Portal</span>
            </h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 animate-fade-in">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
              )}
            </button>

            {currentUser && (
              <>
                <div className="hidden sm:flex flex-col items-end">
                   <span className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                     Welcome, <span className="font-bold text-gray-900 dark:text-white">{currentUser.employeeName}</span>
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
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;