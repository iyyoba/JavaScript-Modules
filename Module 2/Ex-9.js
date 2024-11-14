'use strict'
function  even(arr){
  const evenNums = [];
  for(const num of arr){
    if (num % 2 === 0){
      evenNums.push(num);
    }
  }
  return evenNums
}
const numbers = [5,3,6,46,72345,15,7,8,5,60, 95, 40]
console.log(numbers);
console.log(even(numbers));