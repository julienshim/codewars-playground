function dim(){
    //-- return multi-dim array --
    const a = [...arguments];
    if (a.length === 1) {
      const v = a[0];
      return typeof v === 'function' ? v() : v;
    }
    const n = a.shift();
    const r = [];
    for (let i = 0; i < n; i++) {
      r.push(dim(...a));
    }
    return r;
  }
  