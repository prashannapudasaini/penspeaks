import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};