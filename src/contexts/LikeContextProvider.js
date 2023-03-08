import React, {useState, createContext, useContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";
import { CART } from "../helpers/consts";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const likeContext = createContext();
export const useLike = () => useContext(likeContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const LikeContextProvider = ({ children }) => {
	const [likeOpened, setLikeOpened] = useState(false);
	const closeLike = () => setLikeOpened(false);
	// const openLike = () => setLikeOpened(true);
  const openLike = () => console.log('Hello');
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: getCountProductsInCart(),
    });

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };


  // добавление товара в корзину -addProductToCart
  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    let productToFind = cart.products.find(
      (elem) => elem.item.id === product.id
    );
    if (productToFind) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
		getCart();
		
  };
  // превышение количества товаров в корзине
  const changeProductCount = (count, id) => {
    if (count < 0) {
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">Count of product must be qreater then 0</Alert>
      </Stack>;
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  // удаление товара из корзины -deleteProductFromCart
  const deleteProductFromCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };
  // проверка товаров в корзине -checkProductInCart
  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let obj = cart.products.find((elem) => elem.item.id === id);
      return obj ? true : false;
    }
  };
  console.log(state.cart);
  const values = {
    cart: state.cart,
    cartLength: state.cartLength,
    likeOpened,

    addProductToCart,
    getCart,
    changeProductCount,
    deleteProductFromCart,
    checkProductInCart,
    closeLike,
    openLike,
  };

	return <likeContext.Provider value={values}>{children}</likeContext.Provider>;
};

export default LikeContextProvider;