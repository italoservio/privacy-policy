import React from 'react';

export const AppContext = React.createContext({});

export function AppContextProvider({children}: {children: React.ReactNode;}) {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}
