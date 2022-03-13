//https://www.codewars.com/kata/563c13853b07a8f17c000022

function isToday(date) {
  let today = new Date();
  return today.getFullYear() == date.getFullYear() &&
    today.getMonth() == date.getMonth() &&
    today.getDate() == date.getDate()
    ? true
    : false;
}
  