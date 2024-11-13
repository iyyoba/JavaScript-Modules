'use strict';
const dogNames = [];
for (let i = 0; i < 6; i++ ){
  const dogName = prompt("Enter the name of the dog: " );
  dogNames.push(dogName);

}
dogNames.sort().reverse();
const dogList = document.querySelector(".list");
dogList.innerHTML = "";
for(let i= 0; i< dogNames.length; i++){
  const listItem= document.createElement("li");
  listItem.textContent=dogNames[i];
  dogList.appendChild(listItem);

}