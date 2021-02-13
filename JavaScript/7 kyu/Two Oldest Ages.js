function twoOldestAges(ages){
    return ages.sort((a,b)=>a-b).slice(ages.length-2)
  }