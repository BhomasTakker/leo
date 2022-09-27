import React, { useState } from "react";
import formatter from "../utils/number-converter";

export const BagContext = React.createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (item) => {},
	checkout: () => {},
});

const BagContextProvider = (props) => {
	const [items, setItems] = useState([]);
	const addItem = (item) => {
		console.log("context add item" + item);
		setItems((prevItems) => {
			return [...prevItems, item];
		});
	};

	const removeItem = (item) => {
		console.log("context remove item " + item);
		setItems((prevItems) => {
			return prevItems.slice(0, prevItems.length - 1);
		});
	};

	///////////////////////////////
	//probably a seperate service
	//const validateItem = (item) => {};
	const validateItems = (items) => {
		let validated = [...items];
		//check if string input
		//id input
		//actual object
		//etc
		//create/match an actual object to the given input or omit
		//if array recurse and concat/merge
		return validated;
	};
	const checkout = (itemsList) => {
		//validate items to make a valid list of items to 'reduce'
		const validatedItems = validateItems(itemsList);

		const total = validatedItems.reduce((prev, cur) => prev + cur.price, 0);
		return formatter(total);
	};

	return (
		<BagContext.Provider value={{ items, addItem, removeItem, checkout }}>
			{props.children}
		</BagContext.Provider>
	);
};

export default BagContextProvider;
