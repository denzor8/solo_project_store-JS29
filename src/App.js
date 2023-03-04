import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import BaseContent from './components/BaseContent/BaseContent';
import MainRoutes from './MainRoutes';
function App() {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
}

export default App;