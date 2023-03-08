import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './MainRoutes';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';
import LikeContextProvider from './contexts/LikeContextProvider';
function App() {
  return (
    <LikeContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <MainRoutes />
          </CartContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </LikeContextProvider>
  );
}

export default App;