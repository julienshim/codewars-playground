function fizzbuzz(n)
{
  let fizzBuzzArray = [];
  for (let i = 1; i <= n; i++) {
	  if (i % 5 === 0 && i % 3 === 0) {
      fizzBuzzArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      fizzBuzzArray.push('Fizz');
    } else if (i % 5 === 0) {
      fizzBuzzArray.push('Buzz');
    } else {
      fizzBuzzArray.push(i);
    }
  }
  return fizzBuzzArray;
}
