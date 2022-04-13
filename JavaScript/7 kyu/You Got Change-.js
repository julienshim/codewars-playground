function giveChange(amount) {
    // 1, 2, 5, 10, 20, 50, 100
    const register = [1, 5, 10, 20, 50, 100];
    for(let i = register.length - 1; i >= 0; i -= 1) {
      const denomination = register[i];
      if (amount >= denomination) {
        const numberOfBills = Math.floor(amount/denomination);
        amount -= numberOfBills * denomination;
        register[i] = numberOfBills;
      } else {
        register[i] = 0;
      };
    };
    return register;
  }