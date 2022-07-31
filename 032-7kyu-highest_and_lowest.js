function highAndLow(numbers) {
  // convert string to array => ["8","3","-5","42",....]
  const numbersArr = numbers.split(' ');

  // convert array items from type string to type number by simply using "+" sign
  // => [8,3,-5,42,-1,0,0,-9,4,7,4,-4]
  let singleNumbersArr = [];
  for (let i = 0; i < numbersArr.length; i++) {
    singleNumbersArr.push(+numbersArr[i]);
  }

  //sorting array from lowest to highest number
  //[-9,-5,-4,-1,0,0,3,4,4,7,8,42]
  const sortedNumbers = singleNumbersArr.sort(compareNumbers);

  let lowHigh = [];

  // edge case, if array contains only one number
  if (singleNumbersArr.length < 2) {
    let lowest = singleNumbersArr[0]
    let highest = singleNumbersArr[0]
    lowHigh.push(lowest, highest);
  } else {
    lowHigh.push(sortedNumbers.pop());
    lowHigh.push(sortedNumbers[0]);
  }
  return lowHigh.join(' ');

  function compareNumbers(a, b) {
    return a - b;
  }
}

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")// "42 -9");
console.log(highAndLow('1 2 3')); //"3 1"
