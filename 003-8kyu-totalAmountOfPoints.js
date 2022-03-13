//https://www.codewars.com/kata/5bb904724c47249b10000131
console.log(
  points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])
);

function points(games) {
  let winPoints = 3;
  let drawPoints = 1;
  let totalPoints = 0;
//   console.log(games.length);
//   console.log(games[0][0]);
//   console.log(games[0][2]);
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      totalPoints = totalPoints + winPoints;
    //   console.log(totalPoints);
    }
    if (games[i][0] == games[i][2]) {
      totalPoints = totalPoints + drawPoints;
    }
  }
  return totalPoints;
}
