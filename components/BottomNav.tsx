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
  ] : [
    { id: 'dashboard', label: 'Home', icon: HomeIcon },
    { id: 'calendar', label: 'Events', icon: CalendarIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-orange-100 px-4 py-2 flex justify-around items-center z-50 lg:hidden safe-area-bottom shadow-[0_-10px_30px_rgba(249,115,22,0.1)]">
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
            className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 ${
              isActive 
                ? 'text-orange-600 scale-110' 
                : 'text-orange-950/20 hover:text-orange-600'
            }`}
            aria-label={tab.label}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : 'stroke-current'}`} />
            <span className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'opacity-100' : 'opacity-40'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
