import { useContext, useState } from "react";
import { BagContext } from "../context/bag-context";
import { checkout } from "../service/checkout-service";
import classes from "./Bag.module.css";
import LEOButton from "./LEOButton";

const currency = "£";

const Bag = () => {
	const bagContext = useContext(BagContext);
	const [cost, setCost] = useState();

	const { items, clearItems } = bagContext;

	const checkoutHandler = () => {
		setCost(`${currency}${checkout(items)}`);
	};
	const clearHandler = () => {
		setCost();
		clearItems();
	};
	return (
		<section className={classes.Bag}>
			<h2>Bag</h2>
			<p>{`Num items: ${items.length}`}</p>
			<LEOButton label={"Checkout"} onClick={checkoutHandler} />
			<LEOButton label={"CLear"} onClick={clearHandler} />
			<p>
				<strong>{cost && cost}</strong>
			</p>
		</section>
	);
};

export default Bag;
