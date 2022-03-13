//https://www.codewars.com/kata/5803753aab6c2099e600000e

const birthday = new Date();
birthday.setDate(birthday.getDate() - 200);
// console.log(`birthday: ${birthday}`);
console.log(
  ageInDays(birthday.getFullYear(), birthday.getMonth() + 1, birthday.getDate())
);

function ageInDays(year, month, day) {
  // Note that in this test, month == 1 means January (in contrast to JavaScripts Date where the month is zero based)

  // NEW
  // realised that getTime() not needed because dividing by 86400000 is sufficient.
  // new Date() returns date object today
  // new Date(year, month-1, day) constructs given date from args
  // divided by 24 hours (86400000 milliseconds)
  //javascript is like a flexible gymnast proving that forehead can touch bum!
  return `You are ${Math.floor(
    (new Date() - new Date(year, month - 1, day)) / 86400000
  )} days old`;

  //######################################################

  // js month is 0-11
  // js day is 1-31
  // js hours  is 0-23
  //js min and seconds 0-59

  //getTime() gives unix milliseconds which can be used to calculate/compare

  // const given = new Date(year, month - 1, day);
  // console.log(`GIVEN: ${given.getTime()}`);

  // const setToday = new Date();
  // const todayDateNoTime = new Date(
  //   setToday.getFullYear(),
  //   setToday.getMonth(),
  //   setToday.getDate()
  // );

  // console.log(`GIVEN: ${given.getTime()}`);
  // console.log(`Today: ${todayDateNoTime.getTime()}`);

  // const difference = todayDateNoTime.getTime() - given.getTime();
  // const daysOld = Math.floor(difference / 86400000);

  // return `You are ${daysOld} days old`;
}
