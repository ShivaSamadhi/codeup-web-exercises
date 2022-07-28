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

alert(`Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.`);
let google = prompt(`How many hours do you work for Google a week?`)
let amazon = prompt(`How many hours do you work for Amazon a week?`)
let face = prompt(`How many hours do you work for Facebook a week?`)

let gPay = 400
let aPay = 380
let fPay = 350
let weeklyWage = (google*gPay)+(amazon*aPay)+(face*fPay)
alert(`Your gross weekly income is: $${weeklyWage}`)

let enroll = confirm(`Would you like to enroll in this class?`)
let isFull = confirm(`Click OKAY if the class is not already full`)
let isConflict = confirm(`Click OKAY if the class does not conflict with your current schedule`)
alert(`Your enrollment status is: ${enroll && isFull && isConflict}`)

alert(`You may be eligible for a special offer`)
let premium = confirm(`Click OKAY if you are a premium member`)
let items = prompt(`How many items do you have in your cart?`)
let twoOrMore = items >= 2
alert(`Do you qualify for the offer: ${premium || twoOrMore}`)
console.log('Hello from external JavaScript');