function removeChar(str){
 let array = str.split("");
 array.shift();
 array.pop();
 return array.join("");
};
