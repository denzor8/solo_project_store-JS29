import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// import Drawer from './components/Drawer';
import Basket from './components/Basket/Basket';
import ProductCard from './components/ProductCard/ProductCard';
// import { ProductContextProvider } from './contexts/ProductContextProvider';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar'

function App() {
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