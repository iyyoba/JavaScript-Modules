
  'use strict'
  let num = parseInt(prompt("Please enter your number: "))
    if (num === 0 ||num === 1 ){
       document.querySelector('#target').innerHTML = `${num} is not a prime number.`;
    }
    else if (num ===2){
      document.querySelector('#target').innerHTML = `${num} is a prime number.`;
    }
    else if (num < 0) {
      document.querySelector('#target').innerHTML = `Please enter a non-negative integer.`;
    }
      else if (isNaN(num))  {
      document.querySelector('#target').innerHTML = `Please enter a valid integer.`;

    }
    else {
      let isPrime = true;
      if(num % 2 ===0){
        isPrime = false;
      }
      else {
        for (let i = 3; i <= Math.sqrt(num); i + 2) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if(isPrime) {
          document.querySelector('#target').innerHTML = `${num} is a prime number.`
        }
      else {
        document.querySelector('#target').innerHTML = `${num} is not a prime number.`

      }
    }
