'use strict';
const numbers = [];
while(true){
const num = parseFloat(prompt ("Enter number: or zero to terminate"));
if (num === 0){
  break;

}
numbers.push(num);
}
numbers.sort((a, b) => b - a);
console.log(numbers);