import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './MainRoutes';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';
import LikeContextProvider from './contexts/CustomContext';
function App() {
  return (

    <ProductContextProvider>
      <AuthContextProvider>
        <LikeContextProvider>
          <CartContextProvider>
            <MainRoutes />
          </CartContextProvider>
        </LikeContextProvider>
      </AuthContextProvider>
    </ProductContextProvider>

  );
}

export default App;