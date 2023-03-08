import React, { useState } from "react";
import ProductsList from "../../components/ProductCard/ProductsList"
import FilterCategory from "../../components/FilterCategory/FilterCategory";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  
  return (
    <div className="productsPage">
      <FilterCategory setPage={setPage} />
      <ProductsList
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default ProductsPage;