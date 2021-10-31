function incrementString (strng) {
    // return incrementedString
    const head = strng.match(/[a-z]/gi) ? strng.match(/[a-z]/gi).join('') : '';
    const tail = strng.slice(head.length);
    if ( !tail ) { return strng + 1 };
    
    const increment = String(+tail + 1);
    if (increment.length > tail.length) { return head + increment };
    
    const zeros = [...Array(tail.length)].map(x => '0').join("");
    return head + (zeros + increment).slice(-tail.length);
  }
  