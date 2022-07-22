console.log(persistence(39));

function persistence(num) {
  let result = 0;

  //e.g. input 39 output ['3', '9']
  numArr = splitNumberToArrayOfSingleDigits(num);

  // as long as the number is 2 digits or more
  while (numArr.length > 1) {
    //   multiplies the single digits, returns a number.  e.g. 27 because 3*9=27
    let sum = numArr.reduce((acc, curr) => {
      return acc * curr;
    });

    //counting how often multiplication done
    result = result + 1;
    //e.g. input 27 output ['2', '7']
    numArr = splitNumberToArrayOfSingleDigits(sum); 
  }

  return result;

  //e.g. input 39 output ['3', '9']
  function splitNumberToArrayOfSingleDigits(number) {
    const numStr = String(number).split('');
    const numArr = numStr.map((value) => {
      return Number(value);
    });
    return numArr;
  }
}

// console.log(persistence(39)); //3 (multiply 3 times until one digit)
// // because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit

// function persistence(num) {
//   let result = 0;
//   console.log(num); //39

//   //e.g. input 39 output ['3', '9']
//   numArr = splitNumberToArrayOfSingleDigits(num);
// //   console.log(numArr);
// //   console.log(numArr.length);

//   while (numArr.length > 1) {
//     //   multiplies the single digits, returns a number.  e.g. 27 because 3*9=27
//     let sum = numArr.reduce((acc, curr) => {
//       return acc * curr;
//     });
//     console.log(`SUM ${sum}`);
//     result = result + 1; //counting how often multiplication done
//     // console.log(result)
//     numArr = splitNumberToArrayOfSingleDigits(sum); //e.g. input 27 output ['2', '7']
//   }
// //   console.log(result)
//   return result;

//   //e.g. input 39 output ['3', '9']
//   function splitNumberToArrayOfSingleDigits(number) {
//     const numStr = String(number).split('');
//     // console.log(numStr);
//     const numArr = numStr.map((value) => {
//       return Number(value);
//     });
//     //   console.log(numStr);
//     //   console.log(numArr);
//     return numArr;
//   }
// }
