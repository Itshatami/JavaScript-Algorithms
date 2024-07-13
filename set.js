/*
* Set
* should be unique, otherways take all same values in one value;
* it has simple access to the items inside than Arrays
*/

const prices = new Set()

prices.add(54234);
prices.add(23);
prices.add(48);
prices.add(23);

// for (let price of prices) {
//     console.log(price);
// }

console.log(prices.has(23));