function solution(strings) {
  //Approach is
  //create new empty solution array
  //read out each letter in string checking if it is a capital letter
  //if so, insert " " into solution array (needed for joining later)
  //insert the capital letter
  //read out next letter and so onwards
  //finally use join method on solution array to get result.
  const stringsArr = strings.split('');

  const solutionArr = [];

  for (let i = 0; i < stringsArr.length; i++) {
    if (stringsArr[i] == stringsArr[i].toUpperCase()) {
      solutionArr.push(' ');
    }
    solutionArr.push(stringsArr[i]);
  }

  // For unknown reason codewars (in browser) does not recognize Array.prototype.values()
  //   for (const value of iterator) {
  //     if (value == value.toUpperCase()) {
  //       solutionArr.push(" ")
  //     }
  //     solutionArr.push(value)
  //     indexCount++
  //   }

  return solutionArr.join('');
}

console.log(solution('camelCasingDodeC'));
