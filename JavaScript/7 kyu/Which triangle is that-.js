var typeOfTriangle = function (sideA, sideB, sideC) {
  
  const triangle = [sideA, sideB, sideC];
  
  const isNotTriangle = (arr) => {
    const isAllNums = arr.every(x => typeof x === 'number');
    const [a, b, c] = arr.sort((a,b) => a-b);
    return !isAllNums || (a + b <= c) || arr.includes(0)
  }
  
  if (isNotTriangle(triangle)) {
    return 'Not a valid triangle';
  }
  
  switch([...new Set([sideA, sideB, sideC])].length) {
      case 1:
        return 'Equilateral';
      case 2:
        return 'Isosceles'
      case 3:
        return 'Scalene';
  }
}
