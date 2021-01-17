function uncensor(infected, discovered) {
  const discoveredArr = [...discovered]
  return [...infected]
      .map(letter => letter === '*' ? discoveredArr.shift() : letter)
      .join("")
}
