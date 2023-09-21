function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  return ["tree fiddy", "3.50"]
    .map((p) => s.toLowerCase().includes(p))
    .some((v) => v);
}
