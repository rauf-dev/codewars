function getCount(str) {
    const vowels = "aeiou"
    const strArr = str.toLowerCase().split("")//create lowercased array
    let count = 0

    strArr.forEach(element=> {
        if (vowels.includes(element)) count ++
    });
    
    return count
  }

  console.log(getCount("aezzz")) //5
//   console.log(getCount("abracadabra")) //5