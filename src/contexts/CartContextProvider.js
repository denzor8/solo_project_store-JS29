import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const cartContext = React.createContext();
export const useCart = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
	const [cartOpened, setCartOpened] = useState(false);
	const closeCart = () => setCartOpened(false);
	const openCart = () => setCartOpened(true);
	const values = {
		cartOpened,
		setCartOpened,
		closeCart,
		openCart
	}
	return (
		<cartContext.Provider value={values}>
			{children}
		</cartContext.Provider>
	)
}
export default CartContextProvider;

