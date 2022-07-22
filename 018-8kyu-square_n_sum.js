function squareSum(numbers) {
  let sum = 0;

  //FOR OF (981ms)
  //   for (let number of numbers){
  //     sum = sum + (number * number);
  // }

//   FOR EACH (944ms)
//     numbers.forEach(number => {
//       sum = sum + (number * number);
//     });

 // FOR EACH with ARROW syntax (952ms)
//   numbers.forEach(number => {
//     sum = sum + number * number;
//   });

  //OLD SCHOOL FOR (906ms)
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      sum = sum + number * number;
    }
  return sum;
}
console.log(squareSum([0, 3, 4, 5]));
