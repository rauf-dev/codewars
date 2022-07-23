function sum(numbers) {
  "use strict";
  return numbers.reduce((prev, current) => prev + current, 0);
}

console.log(sum([8,6,5,4,3]));
