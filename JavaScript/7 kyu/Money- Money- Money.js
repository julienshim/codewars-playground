function calculateYears(principal, interest, tax, desired) {
    // your code
    let years = 0
    
    while (principal < desired) {
      let ir = principal * interest;
      let tr = principal * interest * tax;
      principal = principal + ir - tr;
      years++;
    }
    
    return years

  }
