import React, { useState } from "react";

export const BagContext = React.createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (item) => {},
	clearItems: () => {},
});

const BagContextProvider = (props) => {
	const [items, setItems] = useState([]);
	const addItem = (item) => {
		setItems((prevItems) => {
			return [...prevItems, item];
		});
	};

	const removeItem = (item) => {
		setItems((prevItems) => {
			return prevItems.slice(0, prevItems.length - 1);
		});
	};

	const clearItems = () => {
		setItems([]);
	};

	return (
		<BagContext.Provider value={{ items, addItem, removeItem, clearItems }}>
			{props.children}
		</BagContext.Provider>
	);
};

export default BagContextProvider;
