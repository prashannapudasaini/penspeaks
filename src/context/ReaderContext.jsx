import { createContext, useState } from 'react';

export const ReaderContext = createContext();

export const ReaderProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(18);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [progress, setProgress] = useState(0);

  return (
    <ReaderContext.Provider value={{
      fontSize, setFontSize,
      currentChapter, setCurrentChapter,
      progress, setProgress
    }}>
      {children}
    </ReaderContext.Provider>
  );
};