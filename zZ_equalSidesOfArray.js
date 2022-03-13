findEvenIndex([1, 2, 3,4,3,2,1]); // 3
// findEvenIndex([1, 100, 50, -51, 1, 1]); // 1
// findEvenIndex([20, 10, -80, 10, 10, 15, 35]); // 0
// 20,10,-80,10,10,15,35

function findEvenIndex(arr) {
  // {1,2,3,4,3,2,1}
  // at index 0: sum of 0    == sum of 2,3,4,3,2,1?
  // at index 1: sum of 1    == sum of 3,4,3,2,1?
  // at index 2: sum of 1,2  == sum of 4,3,2,1?
  // at index 3: sum of 1,2,3  == sum of 3,2,1?
  //   console.table(arr);
  let sumRight = 0;
  let sumLeft = 0;
  let sumsLeftArr = [0];
  let sumsRightArr = [];
  //right side
  for (let i = 1; i < arr.length; i++) {
    // build array for right side
    let arrR = Array.from(arr.slice(i, arr.length));
    sumRight = 0;

    // build array for left side
    let arrL = Array.from(arr.slice(0, i));
    // console.table(arrL);
    sumLeft = 0;

    // call right side
    addRight(arrR);
    // console.log(`Sum right is; ${sumRight}`);
    // console.log(sumsRightArr);
    // add one last push 0 to array

    // call left side
    addLeft(arrL);
    // console.log(`Sum left is; ${sumLeft}`);
    // console.log(sumsLeftArr);
  }
  sumsRightArr.push(0);
  // console.log(sumsRightArr);
  //  START Compare sumsRightArr and sumsLeftArr to find match. return index of match.
  // console.log(Object.entries(arr))

  console.table(arr);
  console.table(sumsLeftArr);
  console.table(sumsRightArr);
  let matchFound = -1
  for (let i = 0; i < arr.length; i++){
    console.log(`left ${sumsLeftArr[i]} right ${sumsRightArr[i]}`)
    // console.log(arr[i])
    if (sumsLeftArr[i] === sumsRightArr[i]){
        console.log(arr[i])
        matchFound = Number(arr[i-1]);
        // return;
        break;
    }
}
console.log(matchFound);

//########################################  
//   let matchFound = -1
//   arr.forEach(function (number, index) {
//       console.log(`index ${index}, number ${number}`)
//     if (sumsLeftArr[number] === sumsRightArr[number]) {
//         console.log(`left ${sumsLeftArr[number]} equal right ${sumsRightArr[number]}`)
//       return matchFound = index;
//     }
//     console.log(`left ${sumsLeftArr[index]} not right ${sumsRightArr[index]}`)
// });
// console.log(`Answer is ${matchFound}`);
//########################################

  //  END Compare sumsRightArr and sumsLeftArr to find match. return index of match.

  // sum of right side
  function addRight(arrR) {
    // console.log(arrR);
    arrR.forEach((element) => {
      //   console.log(element);
      sumRight = sumRight + element;
    });
    sumsRightArr.push(sumRight);
    // console.log(sumRight);
    return sumRight;
  }

  // sum of left side
  function addLeft(arrL) {
    // console.log(arrR);
    arrL.forEach((element) => {
      //   console.log(element);
      sumLeft = sumLeft + element;
    });
    sumsLeftArr.push(sumLeft);
    return sumLeft;
  }
}
