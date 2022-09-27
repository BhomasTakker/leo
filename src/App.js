import Bag from "./components/Bag";
import ProductList from "./components/ProductList";
import classes from "./App.module.css";
import items from "./data/items.json";

// const validateItem = (item) => {
//   if(item===)
// };

// const prods = ['apple', 'orange'];

// const checkout = (list) => {
//   list.forEach(item => {
//     const validatedItem = validateItem(item);
//     if(!validatedItem) return;
//   });
// };

function App() {
	return (
		<div className={classes.App}>
			<header></header>
			<main className={classes.appBody}>
				<ProductList products={items} />
				<Bag />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
