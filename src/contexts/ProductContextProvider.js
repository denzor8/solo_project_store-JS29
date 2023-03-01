import React, {useState, useEffect,useContext } from 'react';
import axios from 'axios';

export const productContext = React.createContext();
export const useProducts = () => useContext(productContext);

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const API = 'http://localhost:8000/products'
	// console.log(products)
	async function getProducts() {
		let res = await axios.get(`${API}?page=`);
		setProducts(res.data);
		// console.log(res.data[0].name)
	}
	useEffect(() => {
    getProducts()
	}, [])

	const values = {
		products: products,
		getProducts,
	}
	return (
		<productContext.Provider value={values}>
			{children}
		</productContext.Provider>
	)
}