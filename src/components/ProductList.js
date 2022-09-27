import { useContext } from "react";
import { BagContext } from "../context/bag-context";
import Product from "./Product";
import classes from "./ProductList.module.css";

const ProductList = ({ products }) => {
	const { addItem, removeItem } = useContext(BagContext);

	const createItems = (products) => {
		return products.map((item) => {
			return (
				<Product
					item={item}
					addItem={addItem}
					removeItem={removeItem}
					key={item.id}
				/>
			);
		});
	};

	return (
		<section>
			<h2>ProductList</h2>
			<ul className={classes.products}>{createItems(products)}</ul>
		</section>
	);
};

export default ProductList;
