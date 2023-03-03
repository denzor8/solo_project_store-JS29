import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Basket from './components/Basket/Basket';
import ProductCard from './components/ProductCard/ProductCard';
import axios from 'axios';
import MainRoutes from "./MainRoutes";
import AuthContextProvider from './contexts/AuthContextProvider';
import BaseContent from './components/BaseContent/BaseContent';
function App() {

  return (
    <AuthContextProvider>
      <BaseContent />
    </AuthContextProvider>
  );
}

export default App;