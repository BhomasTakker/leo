import { checkout } from "./checkout-service";
import formatter from "../utils/number-converter";

const item1String = "apple";
const item2String = "orange";

const item1Price = 0.6;
const item2Price = 0.25;

const item1Id = 1;
const item2Id = 2;

const item1Array = [
	item1String,
	item1String,
	item1String,
	item1String,
	item1String,
];
const item2Array = [
	item2String,
	item2String,
	item2String,
	item2String,
	item2String,
];

const hodgePodge = [
	item1String,
	() => {},
	undefined,
	item1String,
	true,
	item1Array,
	item2Array,
	item1Id,
	"Kintchen sink",
	item2Array,
	67,
	item2Id,
	null,
	item2Id,
	item1String,
	item1String,
	item1Array,
	Infinity,
];

it("returns correct value for strings", () => {
	const result = checkout([item1String, item2String]);
	const expected = formatter(item1Price + item2Price);
	expect(result).toBe(expected);
});

it("returns correct value for ids", () => {
	const result = checkout([item1Id, item2Id]);

	const expected = formatter(item1Price + item2Price);
	expect(result).toBe(expected);
});

it("returns correct value for nested arrays", () => {
	const result = checkout([item1Array, item2Array]);
	const expected = formatter(item1Price * 3 + item2Price * 4);
	expect(result).toBe(expected);
});

it("kitchen sink does not err", () => {
	const result = checkout([hodgePodge]);
	expect(result).toBeTruthy();
});

it("does not err on empty array", () => {
	const result = checkout([]);
	expect(result).toBeTruthy();
});
