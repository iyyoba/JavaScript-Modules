let ch = ["Johnny", "DeeDee", "Joey", "Marky"];
let theString = "";
function concat(arr){
  for (let i = 0; i<arr.length; i++){
    theString += ch[i];
  }
  return theString ;
}
let result = concat(ch);
console.log(concat(ch));
const stringList = document.querySelector("#list");
stringList.innerHTML = "";
const stringItem = document.createElement("p");
stringItem.textContent = result;
stringList.appendChild(stringItem);

