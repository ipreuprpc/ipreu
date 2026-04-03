import React from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { UserIcon } from './icons/UserIcon';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  role: 'ADMIN' | 'MEMBER';
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, role }) => {
  const tabs = role === 'ADMIN' ? [
    { id: 'overview', label: 'Home', icon: HomeIcon },
    { id: 'announcements', label: 'Post', icon: MegaphoneIcon },
    { id: 'members', label: 'Users', icon: UserIcon },
    { id: 'grievances', label: 'Inbox', icon: MegaphoneIcon },
  ] : [
    { id: 'dashboard', label: 'Home', icon: HomeIcon },
    { id: 'calendar', label: 'Events', icon: CalendarIcon },
    { id: 'grievances', label: 'Secure', icon: MegaphoneIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 px-4 py-2 flex justify-around items-center z-50 lg:hidden safe-area-bottom">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'text-orange-600 dark:text-orange-500 scale-110' 
                : 'text-gray-400 dark:text-gray-600 hover:text-gray-600'
            }`}
            aria-label={tab.label}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : 'stroke-current'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'opacity-100' : 'opacity-60'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
