// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBorad = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    var totalPrice = 0;
    products.map(function (product) { return totalPrice += product.price; });
    return totalPrice;
};
var products = [
    { name: "coffee mug", price: 11.50 },
    { name: "book", price: 13.50 },
    { name: "t-shirt", price: 7.50 }
];
console.log(getTotal(products)); // 32.5
