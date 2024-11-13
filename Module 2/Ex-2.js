'use strict';
let numParticipant;
let names = [];

numParticipant=parseInt( prompt("Enter the number of participants:"));
for(let i=0; i<numParticipant; i++){
  let name = prompt(`Enter name: ${i+1}`);

  names.push(name.trim());

}
names.sort();
const nameList= document.querySelector('#target')
nameList.innerHTML = "";
names.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.textContent=name;
  nameList.appendChild(listItem);
})