//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

sumOfDifferences([
  -1, 10, 1, -2, 7, -13, -13, 6, 13, -12, -15, -10, 11, -17, -10, -15, -17, 13,
  9, -14, 10, 14, -1,
]);

// TESTS
// 2,1,10 --> 9
//16,13,13,-1,-2,-3,-6,-17,-17,-19   --> 35
//5,4,20,17,7,22,5,9,-13  --> 31
// -1,10,1,-2,7,-13,-13,6,13,-12,-15,-10,11,-17,-10,-15,-17,13,9,-14,10,14,-1 -->31

function sumOfDifferences(arr) {
  let numbers = arr;
  let minusArr = [];
  let result = 0;

  // convert to number (probably not usefull?)
  numbers.forEach((number) => Number(number));

  //exit if empty or one element only
  if (numbers.length < 2) {
    let result = 0;
    return result;
  } else {
    sortDesc(numbers);
    console.log(`Sorted array: ${numbers}`);
    minusPairs(numbers);
    console.log(`Minus Array: ${minusArr}`);
    addPairs(minusArr);
    console.log(`Result ${result}`);
    return result;
  }

  // sort descending
  function sortDesc(numbers) {
    numbers.sort(function (a, b) {
      return b - a;
    });
  }

  //new array of minus pairs
  function minusPairs(numbers) {
    for (let i = 1; i < numbers.length; i++) {
      minusArr.push(numbers[i - 1] - numbers[i]);
    }
    return minusArr;
  }
  // add pairs
  function addPairs(minusArr) {
    //exit if only one element
    if (minusArr.length < 2) {
      result = minusArr[0];
    } else {
      for (let i = 0; i < minusArr.length; i++) {
        result = result + minusArr[i];
        // console.log(`result adding: ${result}`);
      }
    }
    return result;
  }
}
