function incrementer(nums) { 
    // code goes here
    return nums.map((x,i) => (x + i + 1) % 10);
  }