'use client'

import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Create provider
export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('Dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'Dark' ? 'Light' : 'Dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);