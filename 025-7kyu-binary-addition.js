function addBinary(a,b) {
    const decimalSum = a + b
    const binary = Number(decimalSum).toString(2) //converted to binary
    return binary
    }

    console.log(addBinary(1,2))