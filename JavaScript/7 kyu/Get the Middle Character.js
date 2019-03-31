function getMiddle(s)
{
  //Code goes here!
  let e = s.length/2;
  return s.length % 2 === 0 ? `${s[e-1]}${s[e]}` : `${s[Math.floor(e)]}`;
}
