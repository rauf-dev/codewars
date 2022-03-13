// Growth of a Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/javascript

function nbYear(p0, percent, aug, p) {
  let percentage = percent / 100;
   let totalPop = p0 + (percentage*p0)+aug;
  let years = 1;
  while (totalPop < p){
  totalPop = Math.trunc(totalPop + (percentage*totalPop) + aug);
  years++; 
  console.log(`End of year: ${years} Population ${totalPop}`);
}
return (years);
}

  // TESTS
  nbYear(1500, 5, 100, 5000); // 15
  nbYear(1500000, 2.5, 10000, 2000000);// 10;
  nbYear(1500000, 0.25, 1000, 2000000);// 94;