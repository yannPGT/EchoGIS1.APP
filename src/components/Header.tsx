import React, { useEffect, useState } from 'react';
import { Calendar, Shield } from 'lucide-react';
import { MeetingDate } from '../types';

interface HeaderProps {
  meetingDates: MeetingDate[];
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

const Header: React.FC<HeaderProps> = ({ meetingDates, isAdmin, onToggleAdmin }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  const upcomingMeetings = meetingDates
    .filter(meeting => new Date(meeting.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      {/* Meeting Dates Banner */}
      {upcomingMeetings.length > 0 && (
        <div className="bg-red-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8">
              <Calendar className="h-5 w-5 flex-shrink-0" />
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
                {upcomingMeetings.map((meeting, index) => (
                  <span key={index} className="whitespace-nowrap">
                    {meeting.type} {meeting.unit}: {new Date(meeting.date).toLocaleDateString('fr-FR')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-red-600 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">EchoGIS1</h1>
              <p className="text-gray-600 dark:text-gray-300">Foire aux questions - Personnel GIS 1</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {theme === 'dark' ? 'Clair' : 'Sombre'}
            </button>
            <button
              onClick={onToggleAdmin}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isAdmin
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {isAdmin ? 'Mode Admin' : 'Mode Utilisateur'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;