function isValidWalk(walk) {
    let distance = 0;
    let horizontal = 0;
    let vertical = 0;
    walk.forEach(function(direction) {
        switch(direction) {
          case 'n':
            vertical, distance += 1;
            break;
          case 's':
            vertical, distance -=1;
            break;
          case 'e':
            horizontal, distance += 1;
            break;
          case 'w':
            horizontal, distance -= 1;
            break;
        }
    });   
        return (walk.length === 10 && horizontal === 0 && vertical === 0 && distance === 0 ? true : false);
  }

// I managed to pass above with a simple return (walk.length === 10 && distance === 0 ? true: false);
// What's the point in checking for horitonzal and vertical then? Definitely a bug.