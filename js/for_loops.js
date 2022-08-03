let showMultiplicationTable = () => {
    let num = Math.floor((Math.random() * 10) + 1);
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log(`${num} * ${i} = ${product}`);
    }
};
showMultiplicationTable();

let randomNum = () => {
    for (let i = 1; i <= 10; i++){
        let num = Math.floor((Math.random() * 180) + 20)
        if (num % 2 === 0){
            console.log(`${num} is even`)
        } else {
            console.log(`${num} is odd`)
        }
    }
}
randomNum()

let pyramid = () => {
    let n = 9
    let string = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += i
        }
        string += "\n"
    }
    console.log(string)
}
pyramid()

let countdownFive = () => {
    for (let i = 100; i >= 5; i -= 5)
        console.log(i)
}
countdownFive()

let countByFive = () => {
    for (let i = 5; i <= 100; i += 5){
        console.log(i)
    }
}
countByFive()

