// const arr = [1, 100, 50, -51, 1, 1]; //answer is index 1
const arr = [1, 2, 3, 4, 3, 2, 1]; //answer is index 3
let sumsLeftToRightArr = [0];
let sumLeft = 0;
let result;

createSumsArray(arr);
let sumsRightToLeftArr = sumsLeftToRightArr.slice().reverse(); //slice returns new array
console.log(sumsLeftToRightArr); //[ 0, 1, 3, 6, 10, 13, 15 ]
console.log(sumsRightToLeftArr); //[ 15, 13, 10, 6, 3, 1, 0 ]

// START compare the values of similar index positions to find a match
//loop to compare
for (let index = 0; index < sumsLeftToRightArr.length; index++) {
  console.log(
    `l2r: ${sumsLeftToRightArr[index]}, r2l: ${sumsRightToLeftArr[index]}`
  );
  if (sumsLeftToRightArr[index] == sumsRightToLeftArr[index]) {
    console.log(index);
    result = index;
  }
  // result = "no match found"
}
console.log(result);
// when match found use aar.indexOf(match-value) to get its index pos

// END compare the values of similar index positions to find a match

function createSumsArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    // loop creating new array containing only one additional element, from right
    let arrL = Array.from(arr.slice(i, arr.length));
    // let arrL = Array.from(arr.slice(0, i));
    sumLeft = 0; // reset
    addLeft(arrL); //send the array + additional element to sum function
  }
  function addLeft(arrL) {
    //loops the elements sent in to growing arrL
    arrL.forEach((element) => {
      //loops until has summed all elements
      sumLeft = sumLeft + element; //sums all elements
    });
    sumsLeftToRightArr.push(sumLeft); //and pushes the resulting sum into new array on each loop
    return sumLeft;
  }
}
