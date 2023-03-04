import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import BaseContent from './components/BaseContent/BaseContent';
function App() {
  return (
    <AuthContextProvider>
      <BaseContent />
    </AuthContextProvider>
  );
}

export default App;