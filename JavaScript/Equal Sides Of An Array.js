function findEvenIndex(arr) {
  //Code goes here!
  let position = 0;
  let left;
  let right;

  while (position < arr.length) {
    position === 0 ? (left = position) : (left = 0);
    position === arr.length - 1 ? right - position : (right = 0);

    for (let i = 0; i < position; i++) {
      left += arr[i];
    }

    for (let j = position + 1; j < arr.length; j++) {
      right += arr[j];
    }

    if (left === right) {
      return position;
    }

    position++;
  }

  return -1;
}
