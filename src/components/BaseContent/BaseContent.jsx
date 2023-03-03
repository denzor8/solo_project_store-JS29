import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Basket from '../../components/Basket/Basket';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContextProvider';

function BaseContent() {
  // product logic
  const [products, setProducts] = useState([]);
  const API = 'http://localhost:8000/products';
  async function getProducts() {
    let res = await axios.get(API);
    setProducts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="wrapper clear">
      <Basket />
      <Header />
      <div className="content p-40">
        <div className="d-flex flex-wrap">
          {products.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaseContent;