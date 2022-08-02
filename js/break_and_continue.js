let breakContinue = () => {
    let oddNum = prompt(`Please enter an odd number between 1 and 50`)
    for (let i = 1; i < 50; i++){
        if (oddNum % 2 !== 1) {
            prompt(`This is not an odd number, try again!`)
            break;
        } else if (oddNum % 2 === 1){
            console.log(`Number to skip ${oddNum}`)
            continue
        }
    }
}
breakContinue()