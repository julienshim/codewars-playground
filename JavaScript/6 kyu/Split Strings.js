function solution(str){
  return str ? (str + "_").match(/../g) : [];
}
