LEO Learning coding exercise
Using create-react-app
JavaScript and Jest

instructions
git clone the repo
run npm install
npm start - to launch
npm test - to run any test suite
npm run test:watch - to run tests in watch/dev mode

Step 1: Shopping cart
You are building a checkout system for a shop which only sells apples and oranges.
Apples cost 60p and oranges cost 25p.
Build a checkout system which takes a list of items scanned at the till and outputs
the total cost
For example: [ Apple, Apple, Orange, Apple ] => £2.05
Make reasonable assumptions about the inputs to your solution; for example, many
candidates take a list of strings as input

Probably incorrectly went for a graphical react approach
the actual question/task calls for a purely functional approach

Have pretty much omitted taking in strings, arrays, etc, but the approach is there
i.e. I just haven't filled the functionality out

- I might add later via a simple interface - i.e. string input, id, quantities

### Functionality in

It is the bag-context file that has the required logic
src/context/bag-context.js

Step 2: Simple offers
The shop decides to introduce two new offers
● buy one, get one free on Apples
● 3 for the price of 2 on Oranges
Update your checkout functions accordingly

Completed the item validation from step 1
Created some basic tests

to run tests in watch mode so you can edit
npm run test:watch
