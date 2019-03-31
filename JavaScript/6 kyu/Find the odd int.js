function findOdd(A) {
  //happy coding!
  for (let i = 0; i < A.length; i++) {
      let count = 0;
      for (let j = 0; j < A.length; j++) {
        A[i] === A[j] && count++;
      };
      if (count % 2 === 1) {
        return A[i];
      };
  };
};
