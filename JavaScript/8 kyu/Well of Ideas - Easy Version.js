function well(x){
  const good = x.filter( x => x === "good").length;
  if (good === 0) { 
    return "Fail!" 
  } else { 
    return good <= 2 ? 'Publish!' : 'I smell a series!'
  };
}
