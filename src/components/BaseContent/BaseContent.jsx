import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Basket from '../../components/Basket/Basket';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import { useCart } from '../../contexts/CartContextProvider';
import ProductsList from '../ProductCard/ProductsList';

function BaseContent() {
  const { cartOpened, setCartOpened } = useCart() // context

  return (
    <div className="wrapper clear">
      {/* если cartOpened true то покажи компонент Basket  по умолчанию он у меня фолз */}
      {cartOpened && <Basket />}
      <Header />
      <div className="content p-30">
        <ProductsList />
      </div>
    </div>
  );
}

export default BaseContent;