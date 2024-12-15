// let username = "John";

// console.log(username === "John");
// console.log(typeof username === "string")

// console.log(username === "John" || typeof username === "number")

// console.log(true && "Hello" && "JS");

// console.log(false || true || "hello" );
// console.log(false || "hello" || true)

// console.log(!(username === "John"))

// let day = "monday";

// switch(day){
//     case "Monday":
//         console.log("This is Monday");
//         break;
//     case "Thu":
//         console.log("This is Thu");
//         break;
//     default:
//         console.log("Other day");
//         break;
// }

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// let colors = ["white", "black", "blue", "pink"];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// console.log(colors.length)

// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }

// for(let color of colors){
//     console.log(color)
// }

// let username = "John";

// for(let i of username){
//     console.log(i)
// }

// let user = {
//     name: "John",
//     age: 20,
//     city: "Ygn"
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user.city)
// console.log(user["name"])

// for(let i in user){
//     console.log(user[i])
// }

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text +=  i ;
}
console.log(text)