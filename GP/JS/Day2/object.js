// let user = { name: "John" };
// let admin = user;
// admin.name = "Rose";

// console.log("user", user);
// console.log("admin", admin);
// console.log(admin == user)

// let a = {};
// let b = a;
// console.log(a === b)

let user = { name: "John", age: 20, city: "BKK" };
let admin = {};
for(let i in user){
    admin[i] = user[i]
}

admin.name = "Rose";
console.log(admin);
console.log(user);