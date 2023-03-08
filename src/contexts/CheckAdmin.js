import React, { createContext, useContext } from 'react';
import CheckAdmin from './CheckAdmin';

export const adminContext = createContext(null);
export const useAdmin = () => useContext(adminContext);

function App() {
  const currentUser = { 
    username: 'admin', 
    password: 'pass123', 
  };

  return (
    <adminContext.Provider value={currentUser}>
      <CheckAdmin />
    </adminContext.Provider>
  );
}

