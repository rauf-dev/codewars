function removeSmallest(numbers) {
  let smallest = numbers[0];
  let index = 0;
  let location;
  const workingNumbers = [...numbers];

  //finding smallest number and its index position
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
      location = index;
    }
    index++;
  }
  console.log(`smallest: ${smallest}, at index: ${location}`);

  //mutating the clone array
  workingNumbers.splice(location, 1);
  return workingNumbers;
}

console.log(removeSmallest([66, 386, 356, 163, 185, 186, 154, 396, 188])); // [5, 3, 2, 4]
