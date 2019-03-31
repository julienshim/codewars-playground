function accum(s) {
	// your code
  let split = s.toLowerCase().split("");
  let mumble = [];
  for(let i = 0; i < split.length; i++){
    let m = [];
    for(let j = 0; j < i+1; j++){
      j === 0 ? m.push(split[i].toUpperCase()) : m.push(split[i]);
    };
    mumble.push(m.join(""));
  };
  return mumble.join("-");
};
