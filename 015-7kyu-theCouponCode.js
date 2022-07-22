// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
//A coupon is no more valid on the day AFTER the expiration date.

console.log(checkCoupon('123s', '123', 'September 5, 2014', 'October 1, 2014')); //true

// console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) //false
// console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); // false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let result;
  let couponCurrentDate = new Date(new Date(currentDate).getTime());
  // using .getTime() because without it the date objects are not reliable to compare, and month is offset by -1 (0-11)
  // adding 24 hrs (in milliseconds) to expiration date
  let couponExpiryDate = new Date(
    new Date(expirationDate).getTime() + 60 * 60 * 24 * 1000
  );

  console.log(`Current date: ${couponCurrentDate}`);
  console.log(`Exipiry date: ${couponExpiryDate}`);
  console.log(`Entered Code: ${enteredCode} and of type ${typeof enteredCode}`);
  console.log(`Correct Code: ${correctCode} and of type ${typeof correctCode}`);

  result =
    couponExpiryDate > couponCurrentDate && enteredCode === correctCode
      ? true
      : false;

  return result;
}
