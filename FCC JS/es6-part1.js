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

const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

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

let a = 8, b = 6;
[a, b] = [b, a]

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

