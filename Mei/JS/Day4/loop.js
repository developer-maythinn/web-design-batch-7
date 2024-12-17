// let user = {
//     name: "John",
//     age: 20,
//     city: "BKK",
//     color: "brown"
// }
// // console.log(user.name)
// // console.log(user["name"])

// for(let i in user){
//     // console.log(i)
//     console.log(user[i]) // user["name"]
// }

let text = "";
for (i = 0; i < 10; i++) {
    // if(i === 2){
    //     break;
    // }
    if(i === 2){
        continue;
    }
    text += i;

  }
  console.log(text)

try {
  console.log("Hello");
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message)
}
