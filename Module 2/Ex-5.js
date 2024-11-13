'use strict';

const numbers = [];

while (true) {
  const input = parseFloat(prompt(`Enter a number:`));

  if (numbers.includes(input)) {
    console.log(`The number ${input} has already been entered. Stopping the program.`);
    break;
  }

  numbers.push(input);
}

numbers.sort((a, b) => a - b);
console.log("Entered numbers in ascending order:", numbers);

