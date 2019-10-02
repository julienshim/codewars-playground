var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  const catYears = humanYears === 1 ? 15 :
                   humanYears === 2 ? 15 + 9 :
                   15 + 9 + ((humanYears - 2) * 4);
  
  const dogYears = humanYears === 1 ? 15 :
                   humanYears === 2 ? 15 + 9 :
                   15 + 9 + ((humanYears - 2) * 5);
  
  return [humanYears,catYears,dogYears];
}
