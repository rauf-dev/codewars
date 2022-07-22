//https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript


// makes this string uppercase
// gives it sorted in alphabetical order by last name.
//GIVEN s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//RETURN "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

function meeting(s) {
    //replace is a string method, doesnt work on arrays.
    //split converts string to new array
 
    sArr = s.split(';');
console.log(sArr);

const replaced = sArr.forEach(fullName => {
    // fullName.replace(':','P');
    console.log(typeof(fullName))
    return fullName;
});

replaced
}