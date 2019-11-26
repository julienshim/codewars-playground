function generateRange(min, max, step){
  const maxArr = Array.from( Array(max).keys() ).map( x => ++x );
  return maxArr.filter(x => x >= min && (x - min) % step === 0);
}
