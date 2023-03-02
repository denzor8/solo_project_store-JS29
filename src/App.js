import React, { useState,useEffect } from 'react';
import Header from './components/Header';
// import Drawer from './components/Drawer';
import Drawer from './components/Basket/Basket';
import ProductCard from './components/ProductCard/ProductCard';
// import { ProductContextProvider } from './contexts/ProductContextProvider';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const API = 'http://localhost:8000/products';
  async function getProducts() {
    let res = await axios.get(API);
    setProducts(res.data);
  };
  useEffect(() => { 
    getProducts();
  },[])

  return (
      <div className="wrapper clear">
        <Drawer />
        <Header />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все товары</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {/* <h3>Products List</h3> */}
            {products.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;