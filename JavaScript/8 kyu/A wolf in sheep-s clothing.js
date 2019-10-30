function warnTheSheep(queue) {
  const sheep = queue.length - (queue.indexOf('wolf') + 1);
  const first = queue[queue.length - 1];
  return first === 'wolf' ? `Pls go away and stop eating my sheep` : `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
}
