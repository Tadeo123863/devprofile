import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', fontSize: '1.2rem' }}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;