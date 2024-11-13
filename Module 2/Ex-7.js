'use strict';
let rolledNum;
let n = parseInt(prompt("Enter sides of dice:"));
function roll(n){
  rolledNum = Math.floor(Math.random() * n) + 1;
  return rolledNum;
}
let result= roll(n);
const rolled = [];
while(result!==n) {
  rolled.push(result);
  result=roll(n);
}
const rollList= document.querySelector('#dice');
rollList.innerHTML = "";

for(let i = 0; i<rolled.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent=rolled[i];
    rollList.appendChild(listItem);
}