function getGrade(s1, s2, s3) {
  let average = Math.round((s1 + s2 + s3) / 3);
  let grade = "F";
  console.log(average)

  if (average < 60) return grade = "F"
  else if (average < 70) return grade = "D"
  else if (average < 80) return grade = "C"
  else if (average < 90) return grade = "B"
  else return grade = "A"

}

console.log(getGrade(89,95,92));
