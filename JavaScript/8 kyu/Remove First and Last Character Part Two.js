function array(arr){
  //Good luck
  const split = arr.split(',');
  return split.slice(1, split.length-1).join(' ') || null;
}
