// function greet(){
//     console.log("Hello");
//     return "Rice";
// }

// console.log(greet())

let username = function(){
    return "HELLO JS"
}
console.log(username())

(
    function(){
        console.log("HELLO")
    }
)()

// console.log(num1);
// let num1 = 5;

// console.log(greet());

// function greet() {
//     return "JS"
// }

function sum(num1 = 2, num2 = 5) {
  console.log(num1, num2);
  return num1 + num2;
}
// console.log(sum()); // NaN
// console.log(sum(1, 4));
// console.log(sum(5, 10));
console.log(sum())
