/*
* Array
*   data is sorted in order
*   access elements by thy're index
*   we can use methods in arrays
*   we can store various data type in it
*/

let age = 20;

function green() {
    return "Green";
}

const colors = ["yellow", green , age > 18 ? "old":"young"];
colors.forEach(color => console.log(color))

const products = ['book1', 'book2', 'book3'];

// console.log(products[1]);

for (let item of products) {
    console.log(item);
}

// products.forEach(item => {
//     console.log(item);
// });

// products.push("book4");

// How to find index of item
const productIndex = products.findIndex(item => item === 'book3');
console.log(productIndex);