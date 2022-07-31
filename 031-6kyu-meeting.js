//https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
//GIVEN s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//RETURN "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

console.log(
  meeting(
    'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
  )
);

function meeting(s) {
  const lastFirstArr = [];
  let personFirst;
  let personLast;
  let result;

  //Uppercase all. Remove semicolon. Convert to array
  let sArr = s.toUpperCase().split(';').join(' ').split(' ');
  //   let s2 = s.toUpperCase().split(';').join(' ');

  // loop to switch to `lastname, firstname`
  for (let i = 0; i < sArr.length; i++) {
    let person = sArr[i].split(':');
    personFirst = person[0];
    personLast = person[1];
    lastFirstArr.push(`(${personLast}, ${personFirst})`);
  }

  //sort by last name. Convert to string
  result = lastFirstArr.sort().join('');
  return result;
}
