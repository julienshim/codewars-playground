var greet = function(name) {
  const first = name[0].toUpperCase();
  const lower = name.slice(1, name.length).toLowerCase();
  return `Hello ${first+lower}!`
};
