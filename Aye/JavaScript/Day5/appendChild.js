let heading = document.createElement("h2");
let text = document.createTextNode("Hello JS");
heading.appendChild(text)

let body = document.body;
body.appendChild(heading);

console.log(heading)
console.log(text)