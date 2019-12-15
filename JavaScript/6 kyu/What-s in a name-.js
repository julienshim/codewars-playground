function nameInStr(str, name){
  for (let i = 0; i < str.length; i++) {
    if (name && str[i].toLowerCase() === name[0].toLowerCase()){
      name = name.slice(1);
    }
  }
  return name.length === 0 ? true : false;
}
