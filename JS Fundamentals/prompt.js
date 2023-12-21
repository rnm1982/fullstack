// const prompt = require('prompt-sync')();
import myPrompt from 'prompt-sync';
const prompt = myPrompt();
// const prompt = require('prompt-sync')();

// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

const num = prompt("Enter Number: ");
if (num > 0) {
    console.log("Number is Positive");
}
else {
    console.log("Number is not posistive")
}