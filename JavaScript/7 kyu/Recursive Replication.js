function replicate(times, number) {
	// your solution here
  return times <= 0 ? [] : [number].concat(replicate(times - 1, number));
}
