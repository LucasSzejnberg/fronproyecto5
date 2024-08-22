// GlobalContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GlobalContextType {
  result: string;
  setResult: (value: string) => void;
}
let a=React;
let b=a;
a=b;

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<string>('');

  return (
    <GlobalContext.Provider value={{ result, setResult }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
