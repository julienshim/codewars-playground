function loop_size(node){
  const loop = []
  while(loop.indexOf(node) < 0) {
    loop.push(node);
    node = node.next;
  }
  return loop.length - loop.indexOf(node);
}
