function spoonerize(words) {
    //...aaaaand SPOONERIZE!
  const [first, second] = words.split(" ");
  const third = second.slice(0, 1) + first.slice(1)
  const fourth = first.slice(0, 1) + second.slice(1)
  return [third, fourth].join(" ")
}