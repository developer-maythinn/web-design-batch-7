let li = document.createElement("li");
let text = document.createTextNode("Orange");
li.appendChild(text)

let ul = document.getElementById("lists");
let mango = document.getElementById("mango");
let apple = document.getElementById("apple");
ul.insertBefore(li, apple)

console.log(ul)
console.log(li)