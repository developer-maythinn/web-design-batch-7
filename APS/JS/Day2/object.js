// let myObj = new Object();
// myObj.name = "John";
// myObj.age = 20;
// console.log(myObj)

// class myFruit {
//     constructor(name, price) {
//         this.fruit = name;
//         this.price = price;
//     }
// }

// function myFruit(name, price) {
//     this.fruit = name;
//     this.price = price;
// }
// let myObj = new myFruit("apple", "$10");

// console.log(myObj)
// console.log(myObj.price)

// const user = {
//     name: "John",
//     age: 20,
//     parent: {
//         fatherName: "Job",
//         motherName: "Rose"
//     }
// }
// user.name = "Aung";

// console.log(user.age);
// console.log(user["age"]);
// console.log(user.parent.fatherName);

// // delete user.name;
// console.log(user)

// function makeUser(name, age) {
//   return { name, age };
// }
// console.log(makeUser("John", 20));

// let user = {
//   name: "John",
//   age: 20,
// };

// let admin = user;
// admin.name = "Rose";

// console.log("user", user);
// console.log("admin", admin);

// // console.log(user === admin)

// let a = {};
// // let b = a;
// let b = {};
// console.log(a === b)

let user = {
  name: "John",
  age: 20,
};

let clone = {};
for(let i in user){
    clone[i] = user[i];
}
clone.name = "Rose";
console.log("user", user)
console.log("clone", clone);
