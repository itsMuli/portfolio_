import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDark ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5"/>
              <path d="m12 1-1 3-1-3zm6 11h3l-3 1 3 1zm-12 0h-3l3 1-3 1zm6 6 1 3 1-3zm6.364-13.364L16.95 6.05l1.414-1.414zm-12.728 0L6.05 6.05 4.636 4.636zm12.728 12.728-1.414-1.414 1.414 1.414zm-12.728 0 1.414-1.414-1.414 1.414z"/>
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;