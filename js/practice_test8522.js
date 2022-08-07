//EXERCISE 1
function isTrue(input) {
    return input === true;
}
console.log(isTrue(true))

//EXERCISE 2
function isFalse(input) {
    return input === false;
}
console.log(isFalse(false))

//EXERCISE 3
function not(input) {
    return !input
}
console.log(not(123))

//EXERCISE 4
function addOne(input) {
    if(isNaN(input) !== true && isFinite(input) === true){
        let num = parseInt(input)
        return num + 1
    } else {
        return Infinity
    }
}
console.log(addOne('35'))

//EXERCISE 5
function isEven(input) {
    return isNaN(input) !== true && parseInt(input) % 2 === 0;
}
console.log(isEven('dog'))

//EXERCISE 6
function isIdentical(input1, input2) {
    return input1 === input2
}
console.log(isIdentical(3, "3"))

//EXERCISE 7
function isEqual(input1, input2) {
    return input1 == input2
}
console.log(isEqual(3, '3'))

//EXERCISE 8
function or(input1, input2) {
    return input1 || input2
}
console.log(or(true, true))

//EXERCISE 9
function and(input1, input2) {
    return input1 && input2
}
console.log(and(true, true))

//EXERCISE 10
function concat(input1, input2) {
    return String(input1) + String(input2)
}
console.log(and(true, true))