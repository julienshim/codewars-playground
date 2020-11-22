function lifePathNumber(dateOfBirth) {
  // Your solution...
  const [year, month, day] = dateOfBirth.split("-");
  const sum = String([year,month,day].map(n => compress(n)).reduce((a,b) => +a + +b));
  
  return +compress(sum)
}

const compress = (num) => {
  const arr = String(num.split("").reduce((a,b) => +a + +b));
  return arr.length === 1 ? arr : compress(arr)
}
