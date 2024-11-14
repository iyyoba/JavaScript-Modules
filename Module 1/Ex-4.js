
  'use strict'

  const name = prompt("Please enter your name: ");
  const classRoom = Math.floor(Math.random()*4) + 1;
  let room;

  if (classRoom === 1) {
  room = "Gryffindor";
  }
  if (classRoom === 2) {
    room = "Slytherin";
  }
  if (classRoom === 3) {
    room = "Hufflepuff";
  }
  if (classRoom === 4) {
    room = "Ravenclaw";
  }

  if (name)
  {document.querySelector('#target').innerHTML = `${name}, you are in ${room}!`;
  } else
  {document.querySelector('#target').innerHTML = "Please enter your name: "
  }