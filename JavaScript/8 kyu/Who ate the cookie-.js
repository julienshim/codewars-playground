function cookie(x){
  // ...
  const ref = {
    'string': 'Zach',
    'number': 'Monica',
    'boolean': 'the dog'
  }
  
  return `Who ate the last cookie? It was ${ref[typeof x]}!`
}