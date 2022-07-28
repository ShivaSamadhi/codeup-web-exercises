"use strict";
alert('Welcome to my Website!');
let answer = prompt(`What's your favorite color?`);
alert(`Awesome, ${answer} is my favorite color too!`);

let lM = prompt('How many days would you like to rent Little Mermaid?');
let bB = prompt('How many days would you like to rent Brother Bear?');
let herc = prompt('How many days would you like to rent Hercules?');
let price = 3;
let total = (lM*price)+(bB*price)+(herc*price);
alert(`Your total rental price is: $${total}`);
console.log('Hello from external JavaScript');