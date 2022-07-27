// class SmallestIntegerFinder {
  function findSmallestInt(args) {
    console.log(args);
    let smallest = args[0];
    for (let arg of args) {
      if (arg < smallest) smallest = arg;
    }
    return smallest;
  }
// }
console.log(findSmallestInt([78,56,232,12,8])) //8