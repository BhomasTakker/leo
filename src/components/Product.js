import formatter from "../utils/number-converter";
import LEOButton from "./LEOButton";
import classes from "./Product.module.css";

const Product = ({ item, addItem, removeItem }) => {
	const { id, name, price, img } = item;
	return (
		<li key={id}>
			<article className={classes.card}>
				<img src={img} alt={`${name}`} />
				<div className={classes.container}>
					<h3>{name}</h3>
					<p>{`£${formatter(price)}`}</p>
					<LEOButton label="-" onClick={() => removeItem(item)} />
					<LEOButton label="+" onClick={() => addItem(item)} />
				</div>
			</article>
		</li>
	);
};

export default Product;
