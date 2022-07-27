function wave(str) {
  
  let rightArr = [];
  const resultArr = [];
  
  let wavePos = 0;
  let leftArr = [];
  
  const tempArr = [...str];//R
  console.log(tempArr)//R  [ 'h', 'e', 'l', 'l', 'o' ] length 5
  tempArr.shift()//R remove first letter ['e', 'l', 'l', 'o' ] length 4
  
  for (let i = 0; i < str.length -1; i++) {//R
    console.log(`TempARR before join: ${tempArr}`)
    //console.log(`tempArr: ${tempArr.join("")}`)//R
    tempArr.shift()//R
    console.log(tempArr.length)//R
    rightArr.push( ...tempArr)
    console.log(`RightArr: ${rightArr}`)
}//R

// console.log(rightArr)

  // ###############################
  // WORKING LEFT SIDE
  // for (let i = 0; i < str.length; i++) {
  //   if (i == 0){
  //     leftArr.push(str[wavePos].toUpperCase())
  //   }

  //   else if (i >0){
  //     leftArr = []
  //     leftArr.push(str.slice(0, i))
  //     waveChar = str[wavePos].toUpperCase();
  //     leftArr.push(waveChar)
  //   }
  //   wavePos++
  //   console.log(`LEFT: i is : ${i} LEFT is: ${leftArr.join("")}`);
  // }
  // ###############################
}
wave('hello'); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//   for (let i = 0; i < str.length; i++) {
//     //console.log(`${str[wave].toUpperCase()}${str}`)
//     // letter = str[wave];
//     let newStr = str.replace(str.charAt(wave), str.charAt(wave).toUpperCase());
//     console.log(newStr)
//     wave++;
//   }

// function getWaveChar (str){
// const iterator = str[Symbol.iterator]();
// let theChar = iterator.next();

// while (!theChar.done && theChar.value !== ' ') {
//   // console.log(theChar.value);
//   let newChar = theChar.value.replace(str.charAt(wave), str.charAt(wave).toUpperCase());
//   console.log(newChar)
//   theChar = iterator.next();
//   wave++
// }
