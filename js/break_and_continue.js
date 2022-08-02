let breakContinue = () => {
    let oddNum = parseInt(prompt(`Please enter an odd number between 1 and 50`))
    while (!oddNum || oddNum % 2 === 0 || (oddNum < 1 || oddNum > 50)) {
        oddNum = parseInt(prompt(`Please enter an odd number between 1 and 50`))
    }
    for (let i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        } switch (i === oddNum) {
            case true:
                console.log(`Yikes, let's skip ${oddNum}`)
                break;
            case false:
                console.log(`Here's an odd number ${i}`)
                break;
        }
    }

}
breakContinue()