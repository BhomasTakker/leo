import classes from "./LEOButton.module.css";

const LEOButton = (props) => {
	const { label, onClick } = props;
	return (
		<button className={classes.action} onClick={onClick}>
			<span className={classes.text}>{label}</span>
		</button>
	);
};

export default LEOButton;
