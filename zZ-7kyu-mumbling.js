//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

const log = console.log;

accum('abcd'); //-> "A-Bb-Ccc-Dddd"

function accum(s) {
  const sArr = s.toLowerCase().split('');
  const sArrRepeat = sArr.map((element, index) => {
    return element.charAt(0).toUpperCase() + element.repeat(index);
  });
  return sArrRepeat.join('-');

  // Refactored the below to produce the above 4 lines

  // Convert to lowercase, to array
  //   const sArr = s.toLowerCase().split('');
  //   console.log(sArr);

  //loop, repeat each letter as often as its index nr
  //   const sArrRepeat = sArr.map((element, index) => {
  //     return element.charAt(0).toUpperCase() + element.repeat(index);
  //   });
  //   console.log(sArrRepeat.join('-'));

  //loop, for each element in array, upperCase letter atChar 0
  //   const sArrUpperCaseFirstLetter = sArrRepeat.map((element, index) => {
  //       return element.charAt(0).toUpperCase() + element;
  //   });
  //   sArrUpperCaseFirstLetter.shift([0]); //removing first empty element
  //   sArrUpperCaseFirstLetter.unshift(sArr[0].toUpperCase()); //adding first element uppercased
  //   log(sArrUpperCaseFirstLetter)

  //join elements with - and return as string
  //   const result = sArrUpperCaseFirstLetter.join('-');
  //   log(typeof(result))
  //   return result;
}
