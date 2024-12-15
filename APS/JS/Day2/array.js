// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Toyota";
// console.log(cars);

let fruits = ["apple", "orange", "mango"];
// let str = fruits.toString();
// console.log(fruits, typeof fruits)
// console.log(str, typeof str);

// fruits.splice(1, 0, "Lemon");
// console.log(fruits);
let colors = ["white", "black"];
// let result = fruits.concat(colors);
let result = [...fruits, ...colors]
console.log(result);
