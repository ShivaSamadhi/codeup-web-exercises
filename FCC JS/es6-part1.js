// SCOPING
let checkScope = () => {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
checkScope()

//CONST ARRAY MUTATION
const s = [5, 7, 2];
const editInPlace = () => {
    s[0] = 2
    s[1] = 5
    s[2] = 7
}
editInPlace();

//PREVENT MUTATION
const freezeObj = () => {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS)

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//ARROW FUNCTIONS
const magic = () => {
    return new Date();
};

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]))

//DEFAULT PARAMETERS
const increment = (number, value = 1) => number + value;

//SPREAD OPERATOR
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
console.log(arr2);

//DESTRUCTURING OBJECTS
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;
const {today: highToday} = HIGH_TEMPERATURES;
const {tomorrow: highTmrw} = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowTod}} = LOCAL_FORECAST;
const {today: {high: highTod}} = LOCAL_FORECAST;

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0;

const createPerson = (name, age, gender) => ({
    name,
    age,
    gender
});

//DESTRUCTURING ARRAYS
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// let a = 8, b = 6;
// [a, b] = [b, a]

const source = [1,2,3,4,5,6,7,8,9,10];
const removeFirstTwo = (list) => {
    const [a,b,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);

//TEMPLATE LITERALS
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    return failureItems;
}
const failuresList = makeList(result.failure);

//DECLARATIVE FUNCTIONS
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//CLASS CONSTRUCTOR
class Vegetable {
    constructor(name) {
        this.name = name
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//OBJECT GET/SET
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('dog');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

class Thermostat {
    constructor(temperature){
        this.temperature = temperature
    }
    get temp(){
        return 5/9 * (this.temperature - 32)
    }
    set temp(celsius){
        this.temperature = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp)
thermos.temp = 26;
temp = thermos.temperature;
console.log(temp)


//PROMISES
fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error))

const myPromise = fetch('https://api.github.com/users');
myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));

const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

Promise.all([githubPromise, bitbucketPromise])
    .then(function(data) {
        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    })
    .catch(function(error) {
        // handle errors
    });

fetch('https://api.github.com/users').then( response => {
    response.json().then( users => {
        users.forEach( user => {
            // do something with each user object...
            console.log(user);
        });
    });
});

fetch('https://api.github.com/users')
    .then( response => response.json())
    .then( users => {
        users.forEach( userObj  => {
            // do something with the username login
            console.log(userObj.login);
        });
    })
    .catch(error => console.error(error));

const getGithubUsernames = () => {
    return fetch('https://api.github.com/users')
        .then(response => response.json())
}

getGithubUsernames().then( users => {
    users.forEach( userObj => {
        // do something with each username
        console.log(userObj.login);
    });
}).catch(error => console.error(error));

//CREATING PROMISES
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 1500);
});

console.log(myPromise2); // a pending promise

myPromise2.then(() => console.log('resolved!'));
myPromise2.catch(() => console.log('rejected!'));

//MODULE SCRIPT (HTML)
// <script type="module" src="index.js"></script>

// const uppercaseString = (string) => {
//     return string.toUpperCase();
// }
//
// const lowercaseString = (string) => {
//     return string.toLowerCase()
// }
// export {uppercaseString, lowercaseString}
//
// import {uppercaseString, lowercaseString} from './string_functions.js'
//
// uppercaseString("hello");
// lowercaseString("WORLD!");

const reviewObj = {
    restaurant_id: 1,
    name: 'Codey',
    rating: 5,
    comments: "This is a really good place for coding and eating"
};
const url = 'https://codeup-restful-example.glitch.me/reviews';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
};
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */

