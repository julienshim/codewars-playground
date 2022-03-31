function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function getNth(node, index) {
    // Your code goes here.
    if (node) {
      return index >= 1 ? getNth(node.next, index - 1) : node;
    }
    throw 'Invalid index value';
  }