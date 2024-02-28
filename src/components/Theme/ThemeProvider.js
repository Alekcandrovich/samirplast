import React, { createContext, useState, useEffect, useCallback } from 'react';

export const ThemeContext = createContext();

const getInitialMode = () => {
  const savedMode = JSON.parse(localStorage.getItem('darkMode'));
  return savedMode || false;
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  const applyTheme = useCallback(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    applyTheme();
  }, [isDarkMode, applyTheme]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
