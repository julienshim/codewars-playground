function chain(input, fs) {
    for(const f of fs){
      input = f(input)
    }
    return input;
  }