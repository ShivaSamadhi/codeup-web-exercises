let num = 1;
    while (num < 65536) {
        num *= 2
        console.log(`${num}`)
    }

let allCones = Math.floor(Math.random() * 50) + 50;
    do {
        let sold = Math.floor(Math.random() * 5) + 1;
        if (sold <= allCones) {
            console.log(`sold ${sold} cones`)
            allCones -= sold
        } else if (sold > allCones){
            console.log(`I cant sell you ${sold} cones, only ${allCones} left`)
        }
    } while ( allCones !== 0)
console.log(`We are sold out!`)