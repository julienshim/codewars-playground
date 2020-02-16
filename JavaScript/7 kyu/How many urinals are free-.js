function getFreeUrinals(urinals){
  if (urinals.includes("11")) { 
    return -1 
  } else {
    // Search all 0s after a 0 or beginning without a 1 head
    const free = urinals.match(/(^|0)0(?!1)/g);
    return  free ? free.length : 0;   
  }
}
