
  'use strict'
  const year = prompt("Enter your year: ")
  if (year % 4 === 0 && year % 100 !== 0  || year % 400 ===0) {
      document.querySelector('#target').innerHTML = `${year} is leap year!`;
    }
  else {
          document.querySelector('#target').innerHTML = `${year} is not leap year!`;
    }