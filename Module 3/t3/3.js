'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');
for (const student of names) {
 const option = document.createElement('option');
  option.value = student;
  option.innerText = student;
  target.appendChild(option);
}
