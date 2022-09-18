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