import React, { useEffect, useState } from "react";
import ProductCard from '../../../components/adminPanel/ProductCard/ProductCard'
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "./ProductList.scss";

const AdminList = ({ changeSideBarStatus, page, setPage }) => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  const itemsOnPage = 8;
  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }
  return (
    <>
      
      <div className="images">
        <h3 style={{ textAlign: "center", marginBottom: "0" }}>Список товаров</h3>
        <div className="posts-list">
          {products ? (
            currentData().map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <h3>Loading...</h3>
          )}
        </div>

        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          className="pagination2"
        />
      </div>

    </>
  );
};

export default AdminList;
