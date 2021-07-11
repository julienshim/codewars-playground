function queueTime(customers, n) {
  //TODO
  const queues = [...new Array(n)].map(n => 0);
  
  for (let n of customers) {
    const min = Math.min(...queues);
    const pos = queues.indexOf(min);
    queues[pos] += n
  }
  
  return Math.max(...queues);
}
