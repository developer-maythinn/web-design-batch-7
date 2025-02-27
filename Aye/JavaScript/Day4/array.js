// const fruits = [];
// fruits[0] = "apple";
// fruits[1] = "Orange";
// console.log(fruits)

// const fruits = new Array("apple", "mango");
// console.log(fruits)

// const fruits = ["apple", "mango"];
// // fruits = ["kiwi"]; // error
// fruits[0] = "kiwi";
// console.log(fruits)

// const fruits = ["apple", "orange", "mango"];
// console.log(fruits.length)
// const fruitString = fruits.toString();
// console.log(typeof fruits)
// console.log("fruitString", typeof fruitString)



const fruits = ["apple", "orange", "mango"];
// fruits.push("kiwi")
// fruits.pop();
// fruits.shift();
// fruits.unshift("lemon");
fruits.splice(1, 2, "lemon")
console.log(fruits)