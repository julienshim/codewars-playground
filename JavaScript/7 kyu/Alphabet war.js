function alphabetWar(fight)
{
   const key = {
     "w": 4,
     "p": 3,
     "b": 2,
     "s": 1,
     "m": -4,
     "q": -3,
     "d": -2,
     "z": -1
   }
   const net = [...fight]
     .filter(n => n in key)
     .reduce((acc,cur) => acc + key[cur], 0);
   return net > 0 
     ? "Left side wins!" 
     : net < 0 
       ? "Right side wins!" 
       : "Let's fight again!";
}
