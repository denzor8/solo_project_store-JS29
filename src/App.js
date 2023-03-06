import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './MainRoutes';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';
function App() {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <MainRoutes />
        </CartContextProvider>
      </AuthContextProvider>
    </ProductContextProvider>
  );
}

export default App;