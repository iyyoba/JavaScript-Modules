
    'use strict'

    let numRoll = Number(prompt("How many times do you want to roll? "))

    if( numRoll <= 0){
      document.querySelector("#target").innerHTML = `Please enter a valid number.`;
      }
    else{
       let sum = 0;
      for (let i = 0; i< numRoll; i++) {
        let roll = Math.floor(Math.random() * 6 + 1)
        sum += roll;
        }
    document.querySelector("#target").innerHTML = `The sum of ${numRoll} roll results is ${sum}.`;
     }