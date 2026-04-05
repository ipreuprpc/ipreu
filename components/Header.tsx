import React from 'react';
import { useAppContext } from '../App';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { UserIcon } from './icons/UserIcon';
import { UserRole } from '../types';

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const { currentUser, logout } = useAppContext();

  return (
    <header className="sticky top-0 z-40 glass-nav transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <UserGroupIcon className="h-10 w-10 text-orange-600 animate-fade-in group-hover:scale-110 transition-transform" />
            <h1 className="text-2xl md:text-3xl font-display font-black text-orange-950 tracking-tighter uppercase">
              Union Connect <span className="text-orange-600">Hub</span>
            </h1>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 animate-fade-in">
            {currentUser ? (
              <>
                <div className="hidden sm:flex flex-col items-end">
                   <span className="text-sm text-orange-950/70 leading-tight">
                     Welcome, <span className="font-bold text-orange-950">{currentUser.employeeName}</span>
                   </span>
                   <span className={`text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full mt-0.5 ${
                       currentUser.role === UserRole.ADMIN 
                         ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
                         : 'bg-orange-100 text-orange-700 border border-orange-200'
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
            ) : (
              <button
                onClick={() => onLoginClick?.()}
                className="flex items-center gap-2 px-4 py-2 text-sm font-black text-orange-700 bg-white border border-orange-200 rounded-xl shadow-sm hover:bg-orange-50 hover:border-orange-300 transition-all hover:-translate-y-0.5 active:scale-95 uppercase tracking-wider"
              >
                <UserIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Member Login</span>
                <span className="sm:hidden">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;