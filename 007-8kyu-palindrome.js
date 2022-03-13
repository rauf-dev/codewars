//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

console.log(isPalindrome('WEyck')); //false
// console.log(isPalindrome('RvHegmHh')); //false
// console.log(isPalindrome('')); //true
// console.log(isPalindrome('a')); //true
// console.log(isPalindrome('a')); //true
// console.log(isPalindrome('Madam')); //true
// console.log(isPalindrome('abba')); //true


function isPalindrome(x) {
    //make all lowercase
    const left2right = x.toLowerCase();
    
    //Convert to array so can reverse it, and then back to string
    //.split() converts string to array of singular letters
    // .join() converts array to string
    //slice returns copy of array (reverse would manipulate in place)
    // reverse does as in name (joe becomes eoj)
    const right2left = x.toLowerCase().split('').slice().reverse().join('');
    
    //compare if strings left2right and right2left are same
    let isPalindrome = right2left === left2right ? true:false;
    return isPalindrome;
  }