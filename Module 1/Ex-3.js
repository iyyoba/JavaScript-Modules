
  'use strict'

  let x = parseInt(prompt("Enter the first integer:"));
  let y = parseInt(prompt("Enter the second integer:"));
  let z = parseInt(prompt("Enter the third integer:"));

  let sum = x + y + z;
  let product = x * y * z;
  let average = sum / 3;

  document.querySelector('#target').innerHTML = `Sum: ${sum} <br> Product: ${product} <br> Average: ${average.toFixed(2)}`;

