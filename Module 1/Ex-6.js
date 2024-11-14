
    'use strict'
    const answer = confirm("Should I calculate the square root?");

    if(answer) {
      const num = Number(prompt("Please enter the number:"));

      if (num >= 0) {
        const sqrNum = Math.sqrt(num);
        document.querySelector("#target").innerHTML = `The square root of ${num} is ${sqrNum.toFixed(2)}.`;
      } else {
        document.querySelector("#target").innerHTML = `The square root of a negative number is undefined.`;
      }
    }

    else{
       document.querySelector("#target").innerHTML = `The square root is not calculated.`;
    }


