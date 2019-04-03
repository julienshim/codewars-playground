var findDigit = function(num, nth){
    console.log(num, nth);
    let numArray = String(num).split("").reverse().map( x => Number(x));
    return nth <= 0 ? -1 :
           num === 0 ? 0 :
           !numArray[nth-1] ? 0 : numArray[nth-1];
}
