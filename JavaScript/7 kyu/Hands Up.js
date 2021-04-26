const getPositions = s => {
  const per1 = Math.floor(s % 3);
  const per2 = Math.floor(s / 3) % 3;
  const per3 = Math.floor(s / 9) % 3;
  return [per1, per2, per3];
}
