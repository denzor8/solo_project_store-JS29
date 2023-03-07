import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Basket from '../../components/Basket/Basket';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import ProductsList from '../ProductCard/ProductsList';
import { useCart } from '../../contexts/CartContextProvider';
import FilterCategory from '../../components/FilterCategory/FilterCategory';

function BaseContent() {
  const { cartOpened, openCart,setCartOpened } = useCart() // context

  return (
    <div className="wrapper clear">
      {cartOpened && <Basket />}
      <Header />
      <FilterCategory />
      <div className="content p-30">
        <ProductsList />
      </div>
    </div>
  );
}

export default BaseContent;