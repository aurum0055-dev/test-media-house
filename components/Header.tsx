
import React from 'react';
import { AppSection } from '../types';

interface HeaderProps {
  activeSection: AppSection;
  onSectionChange: (section: AppSection) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { label: 'Home', section: AppSection.HOME, color: 'hover:text-primary' },
    { label: 'News', section: AppSection.NEWS, color: 'text-brand-red' },
    { label: 'Sport', section: AppSection.SPORT, color: 'text-primary' },
    { label: 'Weather', section: AppSection.WEATHER, color: 'text-blue-400' },
    { label: 'iPlayer', section: AppSection.IPLAYER, color: 'text-pink-400' },
    { label: 'Bitesize', section: AppSection.BITESIZE, color: 'text-orange-400' },
  ];

  const getBorderColor = () => {
    switch (activeSection) {
      case AppSection.NEWS: return 'border-brand-red';
      case AppSection.SPORT: return 'border-primary';
      case AppSection.WEATHER: return 'border-blue-400';
      case AppSection.IPLAYER: return 'border-pink-600';
      case AppSection.BITESIZE: return 'border-primary';
      default: return 'border-gray-700';
    }
  };

  return (
    <header className="bg-brand-black text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-white text-black font-bold flex items-center justify-center text-xs">B</div>
            <div className="w-6 h-6 bg-white text-black font-bold flex items-center justify-center text-xs">B</div>
            <div className="w-6 h-6 bg-white text-black font-bold flex items-center justify-center text-xs">C</div>
          </div>
          <div className="flex items-center space-x-2 text-sm font-medium hover:text-gray-300 cursor-pointer border-l border-gray-700 pl-4">
            <span className="material-icons-round text-blue-400 text-lg">account_circle</span>
            <span className="hidden sm:inline">Sign in</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="material-icons-round text-gray-300 cursor-pointer">notifications_none</span>
          <span className="material-icons-round text-gray-300 cursor-pointer">search</span>
        </div>
      </div>
      <nav className={`flex items-center px-2 py-2 overflow-x-auto no-scrollbar whitespace-nowrap text-sm font-semibold border-b ${getBorderColor()}`}>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onSectionChange(item.section)}
            className={`px-3 py-1 border-r border-gray-700 last:border-r-0 transition-colors ${
              activeSection === item.section ? (item.section === AppSection.BITESIZE ? 'text-primary' : item.color) : 'hover:text-gray-400'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
