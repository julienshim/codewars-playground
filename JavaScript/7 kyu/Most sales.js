function top3(products, amounts, prices) {
  const totalsArr = amounts.map( (x, i) => {
    return {rev: x * prices[i], index: i}
  });
  const totalsArrSorted = totalsArr.sort( (a, b) => b.rev - a.rev );
  const same = totalsArr.every( (val, i, arr) => val.rev === arr[0].rev ) 
  return same ? products.splice(0, 3) : totalsArrSorted.splice(0, 3).map(x => products[x.index]); 
}
