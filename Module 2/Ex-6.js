'use strict';
let rolledNum;
function roll(){
  rolledNum = Math.floor(Math.random() * 6) + 1;
  return rolledNum;
}
let result= roll();
const rolled = [];
while(result!==6) {
  rolled.push(result);
  result=roll();
}
const rollList= document.querySelector('#roll-results');
rollList.innerHTML = "";

for(let i = 0; i<rolled.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent=rolled[i];
    rollList.appendChild(listItem);
}