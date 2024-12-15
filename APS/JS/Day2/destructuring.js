// let a, b, rest;
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b)
// console.log(rest)


// let user = ["John", 20, "Yangon", "brown"];
// let [username, age, ...city] = user;
// console.log(username);
// console.log(age)
// console.log(city)


// spread
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log([...arr1, ...arr2]);

// rest

function rest(a, b, ...c) {
    console.log(a, b, c)
}
rest(1, 2, 3, 4, 5, 6)