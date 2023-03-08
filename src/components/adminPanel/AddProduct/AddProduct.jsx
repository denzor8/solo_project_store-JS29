import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "./AddProduct.scss";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
      <div className="containerAdd">
        <form id="contact" action="" method="post">
          <h3>Add Product</h3>
          <fieldset>
            <input
              type="text"
              placeholder="Title"
              name="name"
              onChange={handleInp}
              tabIndex="1"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleInp}
              tabIndex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleInp}
              tabIndex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="Picture"
              name="picture"
              onChange={handleInp}
              tabIndex="4"
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="Type"
              name="type"
              onChange={handleInp}
              tabIndex="5"
              required
            />
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              onClick={() => {
                addProduct(product);
                navigate("/admin");
              }}
            >
              Save
            </button>
            <a href="/admin">Вернуться назад</a>
          </fieldset>
        </form>
      </div>
  );
};

export default AddProduct;
