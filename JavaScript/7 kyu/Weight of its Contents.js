/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
function contentWeight(bottleWeight, scale) {
    const [n, ignore, q] = scale.split(" ");
    const l = +n / (+n + 1)
    const s = (+n + 1)
    return q === 'larger' ? bottleWeight * l : bottleWeight / s;
  }