function lottery(str){
    //your code is here...
    const clean = str.replace(/[a-z]/gi, "").split("");
    const unique = Array.from(new Set(clean)).join("");
    return unique.length > 0 ? unique : "One more run!";
 }