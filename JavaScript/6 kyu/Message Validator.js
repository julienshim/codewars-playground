function isAValidMessage(message){
  // your code
  const d = message.match(/\d{1,}/g);
  const t =  message.match(/[a-z]{1,}/gi);
  
  if(message.length < 1) {
    return true;
  }
  
  if (d.length !== t.length || message[0].match(/\d/) === null) {
    return false;
  }
  
  for(let i = 0; i < d.length; i++) {
    if(+d[i] !== t[i].length) {
      return false;
    }
  }
  
  return true
}
