/*
* Object
*   order doesn't matter
*   access elements by thy're key
*   key must be unique
*   we can use methods in objects
*   in type of Loops only 'for in' has usage
*/

const book = {
    name: "Js for EveryOne",
    price: 90.00,
    isAvalable: true,
    author:"John Doe",
    intro() {
        console.log(`${this.name} witch is ${ this.isAvalable ? "avalable":"not Avalable"} and the author is ${this.author}`);
    }
}

book.intro();
