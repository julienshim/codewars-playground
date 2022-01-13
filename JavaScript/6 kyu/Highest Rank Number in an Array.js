function highestRank(arr){
    //Your Code logic should written here
      const keyCount =  {};
      const unique = [...new Set(arr)];
      for (const item of unique) {
        const count = arr.filter(x  => x === item).length;
        if (count in keyCount) {
          keyCount[count] = [...keyCount[count], item];
        } else {
          keyCount[count] = [item];
        }
      }
      const largest = Math.max(...Object.keys(keyCount).map(x => +x));
      return Math.max(...keyCount[largest]);
    }