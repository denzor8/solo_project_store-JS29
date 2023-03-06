import React, { useState } from "react";
import ProductsList from "../../components/ProductCard/ProductsList"

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="productsPage">
      <ProductsList
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default ProductsPage;