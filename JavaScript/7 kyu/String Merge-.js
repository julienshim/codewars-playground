function stringMerge(string1, string2, letter){
    // Add code here :)
    const head = string1.slice(0, string1.indexOf(letter));
    const tail = string2.slice(string2.indexOf(letter));
    return head + tail;
  }