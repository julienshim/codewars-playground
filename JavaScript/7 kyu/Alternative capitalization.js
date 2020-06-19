function capitalize(s){
  
  function casing(isEven){
      return s.split("").map((x, i) => {
          const rule = isEven ? i % 2 === 0 : i % 2 !== 0;
          return rule ? x.toUpperCase() : x
      }).join("");
  }
  
  return [casing(true), casing(false)]
};