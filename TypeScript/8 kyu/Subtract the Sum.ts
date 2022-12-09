export function subtractSum(n: number): string {
  // fruit name like "apple"
    
  const fruits: any = {
    1: "kiwi",
    2: "pear",
    3: "kiwi",
    4: "banana",
    5: "melon",
    6: "banana",
    7: "melon",
    8: "pineapple",
    9: "apple",
    10: "pineapple",
    11: "cucumber",
    12: "pineapple",
    13: "cucumber",
    14: "orange",
    15: "grape",
    16: "orange",
    17: "grape",
    18: "apple",
    19: "grape",
    20: "cherry",
    21: "pear",
    22: "cherry"
  }
  
  const sum = (x: number) => String(x).split('').reduce((a, c) => a + +c, 0);
  
  const newN = n - sum(n)
  
  return newN in fruits ? fruits[newN] : subtractSum(newN) // fruit name like "apple"
}