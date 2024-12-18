// function createUser(name, age) {
//     return {
//         name,
//         age
//     }
// }

// console.log(createUser("John", 20))

// let user = { username: "John", age: 20 };
// let admin = user;
// admin.username = "Rose";
// console.log("user", user)
// console.log("admin", admin)
// console.log(user == admin)

// let a = {};
// let b = {};
// console.log(a == b)

let user = {
  username: "John",
  age: 20,
};

let admin = {};
for(let i in user){
    admin[i] = user[i]
}
admin.username = "Rose";
console.log("user", user)
console.log("admin", admin)
