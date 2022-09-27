import formatter from "../utils/number-converter";

const Product = ({ item, addItem, removeItem }) => {
	const { id, name, price } = item;

	return (
		<li key={id}>
			<article>
				<h3>{name}</h3>
				<p>{`£${formatter(price)}`}</p>
				<button onClick={() => removeItem(item)}>-</button>
				<button onClick={() => addItem(item)}>+</button>
			</article>
		</li>
	);
};

export default Product;
