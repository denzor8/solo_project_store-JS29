import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './MainRoutes';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';
import LikeContextProvider from './contexts/LikeContextProvider';
function App() {
  return (
    <ProductContextProvider>
      <LikeContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <MainRoutes />
          </CartContextProvider>
        </AuthContextProvider>
      </LikeContextProvider>
    </ProductContextProvider>
  );
}

export default App;