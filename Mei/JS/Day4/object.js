// let user = {
//     name: "John",
//     age: 20
// }

// let myObj = new Object();
// myObj.name = "John";
// myObj.age = 20;
// console.log(myObj)


// class myFruit {
//     constructor(name, price) {
//         console.log(name, price);
//         console.log(this);
//         this.fruit = name;
//         this.price = price;
//     }
// }

// function myFruit(name, price) {
//     console.log(name, price)
//     console.log(this)
//     this.fruit = name;
//     this.price = price
// }

// let myObj = new myFruit("Apple", "$10")
// console.log(myObj.fruit);


const user = {
    name: "John",
    age: 20,
    parent: {
        fatherName: "Job",
        motherName: "Rose"
    }
}
// console.log(user.parent.fatherName)
// console.log(user.parent.motherName)
// delete user.age;


user.name = "Su Su";
console.log(user)
