//EXERCISE 1
function isTrue(input) {
    return input === true;
}
console.log(isTrue(true))
//For the isTrue func, we simply return the boolean that compares the type and value of our input to the boolean value of true.

//EXERCISE 2
function isFalse(input) {
    return input === false;
}
console.log(isFalse(false))
//For the isFalse func, we simply return the boolean that compares the type and value of our input to the boolean value of false

//EXERCISE 3
function not(input) {
    return !input
}
console.log(not(123))
//For of the not func, we simply apply the logical opposite operator (!) to the input and return it

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
//For the addOne func, we use an if statement to check our input against a few conditions. Place the input within an isNaN func
//which returns a boolean value based on if the input is not a number (or if it is a number.) We also run the input through
// the isFinite() func to make sure the input is not infinity. If the input is a number and that number is finite, then we execute
//the following operations. We create a variable named num to store a parseInt call on the input, which makes sure we are using our
//input in number format. Then we return num + 1. If the original conditions are not both met then we can assume that our input is
//either not a number or is infinity in which we can return infinity to meet all the requirements of this func.

//EXERCISE 5
function isEven(input) {
    return isNaN(input) !== true && parseInt(input) % 2 === 0;
}
console.log(isEven('dog'))
//For the isEven, we can return a && conditional that checks whether our input is a number with the isNaN func, then we check whether
//modulus 2 of our input is strictly equal to zero which would indicate that the input is an even number.

//EXERCISE 6
function isIdentical(input1, input2) {
    return input1 === input2
}
console.log(isIdentical(3, "3"))
//For the isIdentical func, we use the triple equal sign to compare the type and value of input1 and input2, then return the boolean value
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