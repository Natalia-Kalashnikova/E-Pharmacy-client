import { createContext, useRef, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const headerRef = useRef(null);
  return (
    <ScrollContext.Provider value={{ headerRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
