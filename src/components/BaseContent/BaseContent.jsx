import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Basket from '../../components/Basket/Basket';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import { useCart } from '../../contexts/CartContextProvider';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';

function BaseContent() {
  const { cartOpened, openCart, setCartOpened } = useCart()
  return (
    <div className="wrapper clear">
      {cartOpened && <Basket />}
      <Header />
      <div className="content p-30">
        <ProductsPage />
      </div>
    </div>
  );
}

export default BaseContent;