//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
    // Your code here
   if (month >= 1 && month <= 3){
     return 1;
   } else if (month >= 4 && month <= 6){
     return 2;
   } else if (month >= 7 && month <= 9){
     return 3;
   } else if (month >= 10 && month <= 12){
     return 4;
   }
  }