function solve(number) {
    let sum = 0
    let step = 0

    for (let index = 1; index <= 100; index+=2) {
        step ++
        if (number < step){
            break
        }
        console.log(index)
        sum += index
    }
    
    console.log(`Sum: ${sum}`)
}

solve(5)

