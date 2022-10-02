import formatter from "../utils/number-converter";
import items from "../data/items.json";

const availableItems = {};

//not great
items.forEach((item) => {
	availableItems[item.name] = { ...item };
});

///////////////////////////////
//probably a seperate service in this instance
//const validateItem = (item) => {};
const validateItems = (items) => {
	return items.flat(Infinity).map((item) => validateItem(item));
};

//offer / available offers
const bngof = (item, n) => {
	//divide by promotion and get rid of the reminder/fraction
	//Math.floor(item.quantity / n) / there's an obvious better way?
	const val = Math.floor(item.quantity / n) * item.price;
	return val;
};

const validateItem = (item) => {
	if (!item) return null;

	switch (typeof item) {
		case "number":
			for (const key in availableItems) {
				const obj = availableItems[key];
				if (obj.id === item) return availableItems[key];
			}
			return null;
		case "string":
			return availableItems[item] ? availableItems[item] : null;
		case "object":
			//no need to check array
			return availableItems[item.name] ? availableItems[item.name] : null;
		default:
			return null;
	}
};

//possibly a seperate service assuming lots of individual offers across a large product base
const calculateOffersSaving = (bag) => {
	//loop a list of current products with a bngof / or bag prducts checking if there is a promotion
	//if(bag[product]) bngof(bag[product], promotionVal); / accumulate saving / return
	const bogofSaving = bag.apple ? bngof(bag.apple, 2) : 0;
	const threeForTwoSaving = bag.orange ? bngof(bag.orange, 3) : 0;

	return bogofSaving + threeForTwoSaving;
};

const calculateTotalPrice = (bag) => {
	let totalPrice = 0;
	for (const id in bag) {
		totalPrice += bag[id].price * bag[id].quantity;
	}
	return totalPrice;
};

const formatList = (list) => {
	const formatted = {};
	//loop list
	list.forEach((item) => {
		//validate item / return item object or null
		const validatedItem = validateItem(item);

		if (!item) return;

		//create a 'set' of unique items with a quantity
		if (availableItems[validatedItem.name]) {
			if (!formatted[validatedItem.name]) {
				formatted[validatedItem.name] = { ...validatedItem, quantity: 1 };
			} else {
				formatted[validatedItem.name].quantity++;
			}
		}
	});

	return formatted;
};

const checkout = (items) => {
	//Probbly combine into a single suite of function
	const validatedItems = validateItems(items);
	const formatted = formatList(validatedItems);

	//Porbably a class/function to do all the price calculations
	const totalPrice = calculateTotalPrice(formatted);
	const saving = calculateOffersSaving(formatted);
	const discountApplied = totalPrice - saving;

	//return according to format
	return formatter(discountApplied);
};

export { checkout };
