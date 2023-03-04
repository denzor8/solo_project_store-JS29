import React, {createContext, useState ,useContext} from "react";

export const authContext = createContext();
export const useAuth = () => useContext(authContext); //! custom hook
export const Context = ({ children }) => {
	const [count, setCount] = useState(1);
	const values = {
		count: count,
		setCount: setCount,
	}
	return (
		<authContext.Provider value={values}>
			{children}
		</authContext.Provider>)
}