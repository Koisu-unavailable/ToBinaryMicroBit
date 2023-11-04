function to_Binary(num: string): number {
    num = "" + num
    let decimal = 0
    for (let digit of num) {
        decimal = decimal * 2 + parseInt(digit)
    }
    return decimal
}

