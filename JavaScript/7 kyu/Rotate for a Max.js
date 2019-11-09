function maxRot(n) {
  // your code
    let nStr = String(n);
    const rotArr = [nStr];
    for (var i=0;i<=nStr.length-1 ;i++){
        nStr = nStr.slice(0,i)+nStr.slice(i+1)+nStr[i];
        rotArr.push(nStr.split().join());
    }
    return Math.max.apply(null, rotArr);
}
