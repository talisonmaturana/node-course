// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Talison. ');

//Challenge: Define and use a function in a new file

//1. Create a new file called notes.js
//2. Create getNotes function that returns "Your notes..."
//3. Export getNotes function
//4. From app.js, load in and call the function printing message to console
const validator = require('validator');

const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);

// console.log(validator.isEmail('talison@hotmail.com'));
console.log(validator.isURL('https://talison.com'));

