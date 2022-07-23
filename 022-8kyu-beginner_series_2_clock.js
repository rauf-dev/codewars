function past(h, m, s){
    //1s = 1000ms
    //1m = 60s (1000 * 60 = 60.000ms)
    //1h = 60m (60.000ms * 60 = 3.600.000ms)
    
    if ((h >=0 && h <=23) && (m >=0 && m <=59) && (s>=0 && s<=59))
    return ( (h * 3600000)+(m * 60000)+(s * 1000))
    else return "Invalid Time Entered"
  }

  console.log(past(21,30,40))