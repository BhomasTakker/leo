import { useContext } from "react";
import { BagContext } from "../context/bag-context";
import classes from "./Bag.module.css";

const Bag = () => {
	const bagContext = useContext(BagContext);

	const { items } = bagContext;

	const checkoutHandler = () => {
		console.log("checkout pass me in" + bagContext.checkout(items));
	};
	return (
		<section className={classes.Bag}>
			<h2>Bag</h2>
			<p>{`Num items: ${items.length}`}</p>
			<button onClick={checkoutHandler}>Checkout</button>
		</section>
	);
};

export default Bag;
