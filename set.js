/*
* Set
*   data is not sorted in order
*   access elements by method
*   length is dynamic
*   elements should be unique, otherways It considers the items as one
*   it has simple access to the items inside than Arrays
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