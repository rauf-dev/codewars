function SeriesSum(n) {
  let sum = 0
  let divisor = 4;
  if (n === 1 || n === 0) return (n.toFixed(2).toString());

  for (let i = 1; i < n; i++) {
    console.log(`1st. sum: ${sum} i: ${i} divisor: ${divisor}`)
    sum = sum + 1/divisor
    console.log(`2nd. sum: ${sum} i: ${i} divisor: ${divisor}`)
    divisor = divisor + 3
    console.log(`3rd. sum: ${sum} i: ${i} divisor: ${divisor}`)
  }
  sum = sum + 1;
  return (sum.toFixed(2).toString())
}

console.log(SeriesSum(0)); //'0.00';
// console.log(SeriesSum(1)); //'1.00';
// SeriesSum(2); // "1.25")
// SeriesSum(3); // "1.39")
// SeriesSum(4); // "1.49")
// console.log(SeriesSum(5)); // "1.57")
