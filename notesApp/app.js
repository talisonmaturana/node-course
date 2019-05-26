// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Talison. ');

//Challenge: Define and use a function in a new file

//1. Create a new file called notes.js
//2. Create getNotes function that returns "Your notes..."
//3. Export getNotes function
//4. From app.js, load in and call the function printing message to console
//const validator = require('validator');
// console.log(validator.isEmail('talison@hotmail.com'));
//console.log(validator.isURL('https://talison.com'));

const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);

//Challenge: Use the chalk library in your project

//1. Install version 2.4.1 of chalk
//2. Load chalk into app.js
//3. Use it to print the string "Success!" to the console in green
//4.Test your work

//Bonus: Use docs to mess around with other styles. Make text bold and inversed.

const chalk = require('chalk');
console.log(chalk.green.bold.inverse('Success'));



