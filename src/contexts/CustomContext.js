import React, { createContext, useContext, useReducer, useState } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";
import { getCountProductsInLike } from "../helpers/functions";
import { LIKE } from "../helpers/consts";

export const likeContext = createContext();
export const useLike = () => useContext(likeContext);

const INIT_STATE = {
	like: JSON.parse(localStorage.getItem("like")),
	likelength: getCountProductsInLike(),
};

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case LIKE.GET_LIKE:
			return { ...state, like: action.payload };
		case LIKE.GET_LIKE_LENGTH:
			return { ...state, likelength: action.payload };
		default:
			return state;
	}
}

const LikeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);
	const getLike = () => {
		let like = JSON.parse(localStorage.getItem("like"));

		if (!like) {
			like = {
				products: [],
				totalPrice: 0,
			};

			localStorage.setItem("like", JSON.stringify(like));
		}

		dispatch({
			type: LIKE.GET_LIKE_LENGTH,
			payload: getCountProductsInLike(),
		});

		dispatch({
			type: LIKE.GET_LIKE,
			payload: like,
		});
	};

	const addProductToLike = (product) => {
		let like = JSON.parse(localStorage.getItem("like"));
		if (!like) {
			like = {
				products: [],
				totalPrice: 0,
			};
		}
		let newProduct = {
			item: product,
			count: 1,
		};
		let productToFind = like.products.find(elem => elem.item.id === product.id);
		if (productToFind) {
			like.products = like.products.filter(elem => elem.item.id !== product.id);
		} else {
			like.products.push(newProduct);
		}
		like.totalPrice = calcTotalPrice(like.products);
		localStorage.setItem("like", JSON.stringify(like));
		getLike();
	};

	const deleteProductFromLike = id => {
		let like = JSON.parse(localStorage.getItem("like"));
		like.products = like.products.filter(elem => elem.item.id !== id);
		like.totalPrice = calcTotalPrice(like.products);
		localStorage.setItem("like", JSON.stringify(like));
		getLike();
	};

	const checkProductInLike = id => {
		let like = JSON.parse(localStorage.getItem("like"));

		if (like) {
			let obj = like.products.find(elem => elem.item.id === id);
			return obj ? true : false;
		}
	};

	const values = {
		like: state.like,
		likelength: state.likelength,

		addProductToLike,
		getLike,
		deleteProductFromLike,
		checkProductInLike,
	};

	return <likeContext.Provider value={values}>{children}</likeContext.Provider>;
};

export default LikeContextProvider;