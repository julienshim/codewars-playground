function outed(meet, boss){
  let scores = [];
  for (let score in meet) {
      scores.push(score === boss ? meet[score]*2 : meet[score]);
  }
  return scores.reduce((a,b) => a+b) / scores.length <= 5 ? "Get Out Now!" : "Nice Work Champ!"
}
