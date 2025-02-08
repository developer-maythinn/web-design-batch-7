// function greet() {
//   console.log("Hello");
//   return "How are you?"
// }
// console.log(greet());

// let username = function(){
//     return "John"
// }
// console.log(username())

// (function(){
//     console.log("Hello")
//     return "Hi"
// })()

// function sum(num1, num2) {
//     console.log(num1, num2)
//     return num1 + num2
// }

// console.log(sum(20, 10))
// console.log(sum(5, 2))

// ********** Hoisting

// console.log(username)
// let username = "John";

let username = myFunc();
console.log(username);

function myFunc() {
  return "Hello";
}
