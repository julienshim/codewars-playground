function reverse(str){
  //WRITE SOME MAGIC
  let split = str.split(" ");
  if (split.includes("")) {
    return '';
  } else {
    for (let i = split.length; i > 0; i--) {
      if (i % 2 === 1 && typeof split[i] === "string") {
        let word = split[i].split("").reverse().join("");
        split[i] = word;
      };
    };
    return split.join(" ");
  };
};
