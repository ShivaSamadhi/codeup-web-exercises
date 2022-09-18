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

