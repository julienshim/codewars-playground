function solve(s){
    //..
  const arr = s.split("").map(l => l.charCodeAt(0)).sort((a,b) => a-b);
  for (let i = 1; i < arr.length; i += 1) {
    const diff = arr[i]-arr[i-1];
    if (diff !== 1) {
      return false
    }
  }
  return true
}