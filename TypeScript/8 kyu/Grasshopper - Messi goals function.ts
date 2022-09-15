export function goals (laLigaGoals:number, copaDelReyGoals:number, championsLeagueGoals:number): number {
    //show me the goals!
    return [...arguments].reduce((a,b) => a + b);
  }