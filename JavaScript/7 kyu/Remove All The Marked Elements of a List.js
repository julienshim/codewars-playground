Array.prototype.remove_ = function(integer_list, values_list){
    //your code here
    return integer_list.filter(n => !values_list.includes(n));
  }