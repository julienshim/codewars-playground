function rowWeights(array){
  //your code here
  let team1 = 0;
  let team2 = 0;
  for(let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1 += array[i];
    } else {
      team2 += array[i];
    }
  }
  return [team1, team2]
}
