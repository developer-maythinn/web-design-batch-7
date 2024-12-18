// let a;
// let b;
// let rest;
// let a, b, rest;
// [a, b, ...rest] = [10, 20, 30, 40];
// console.log(a)
// console.log(b)
// console.log(rest) // [30, 40]
// console.log(rest[1])

// let user = ["John", 20, "BKK", "Brown"];
// let [username, age, ...city] = user;
// console.log(username, age, city)

// function rest(a, b, ...c){
//     console.log(a, b, c)
// }
// rest(1, 2, 3, 4, 5, 6)

// spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2])
