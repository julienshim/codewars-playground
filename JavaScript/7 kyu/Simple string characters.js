function solve(s){
    //..
     const regArr = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/];
     const findRegLen = f => s.split('').filter(l => l.match(f)).length;
     return regArr.map(findRegLen);
   }