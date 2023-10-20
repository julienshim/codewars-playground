function flickSwitch(arr) {
  let state = true;
  const result = [];
  for (let i of arr) {
    if (i === "flick") {
      state = !state;
    }
    result.push(state);
  }
  return result;
}
