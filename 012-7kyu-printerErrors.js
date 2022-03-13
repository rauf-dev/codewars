//https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    let denominator = s.length//can be null but will be caught later
    let invalidReg = new RegExp('[^a-z]') //NOT a-z, no 'g' flag so it stops at first hit
    let errorReg = new RegExp('[^a-m]','g');//NOT a-m
    let output;

    //The string has a length greater or equal to one and contains only letters from a to z.
    if ((denominator >= 1) && (invalidReg.test(s) == false))  {
        //Errors Found
        if (errorReg.test(s)) {
            let output = (`${s.match(errorReg).length}/${denominator}`);
            return output;
        }
        //No errors found
        output = (`0/${denominator}`);
        return output;
    }
}