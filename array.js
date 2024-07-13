//Arrays -  
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