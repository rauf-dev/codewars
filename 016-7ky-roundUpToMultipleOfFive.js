console.log(roundToNext5(31));

function roundToNext5(n) {
  let result = Math.ceil(n / 5) * 5;

  if (result === -0) {
    result = Math.abs(result);
    return result;
  }
  return result;
}

//   input:    output:
//   0    ->   0
//   2    ->   5
//   3    ->   5
//   12   ->   15
//   21   ->   25
//   30   ->   30
//   -2   ->   0
//   -5   ->   -5
//   etc.
