
  'use strict'
  const startYear = prompt("Enter your starting year: ")
  const endYear = prompt("Enter your ending year: ")
  for (let i = startYear; i <= endYear; i++){
    if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
      document.querySelector('#target').innerHTML += `<li>${i}</li>`
    }
}