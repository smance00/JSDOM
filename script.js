//Welcome to JSDOM
console.dir("script,js | 02")
console.dir("Hello DOM!");

const theHeader = document.getElementById("header");
const theButton = document.getElementsByTagName("button");
const theDiv = document.querySelector("div");
const theGreenPara = document.getElementsByClassName("green");

console.log(theGreenPara);
// console.dir(theHeader);
// console.dir(theButton[0]);
// console.dir(theHeader.textContent); // JS DOM

theGreenPara[0].className = "orange"
theHeader.textContent = "This is my new Header";
theButton[0].innerHTML = "Please Click Me";

theHeader.style.color = "#FF0000";

const myNewPara = document.createElement("p");
myNewPara.textContent = "I'm the new paragraph";

console.log(myNewPara);
console.log(theDiv);

theDiv.appendChild(myNewPara);

myNewPara.style.color = "#0000FF";