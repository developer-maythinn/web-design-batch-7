// const user = {
//     name: "John",
//     age: 20,
//     parent: {
//         fatherName: "Job",
//         motherName: "Rose"

//     }
// }
// console.log(user.name)
// console.log(user["name"])
// console.log(user.age)
// console.log(user.parent.motherName)

// let myObj = new Object();
// myObj.name = "John";
// myObj.age = 20;
// delete myObj.name;
// console.log(myObj)

// const age = 20;
// age = 21; // error

// const user = {
//     name: "MT"
// }

// user.name = "May"
// console.log(user)

// let user = {
//   name: "John",
// };
// let admin = user;

// admin.name = "Rose";
// console.log("user", user)
// console.log("admin", admin)
// console.log(admin === user) // true

// let a = {};
// let b = {};
// console.log(a === b) // false

let user = {
  name: "John",
  age: 20,
};

let cloneUser = {};

for (let key in user) {
  console.log(key);

  cloneUser[key] = user[key];
//   cloneUser["name"] = user["name"];
//   cloneUser["age"] = user["age"];
}
// cloneUser.name = "Rose";
// console.log("user", user)
console.log("cloneUser", cloneUser);
