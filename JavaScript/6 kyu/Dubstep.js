function songDecoder(song){
  // ...
  let isWriting = true;
  let original = "";
  for (let i = 0; i < song.length; i++) {
    const forward = song[i] + song[i + 1] + song[i + 2];
    const back = song[i - 1] + song[i - 2] + song[i - 3];
    if (forward === "WUB") {
      isWriting = false;
    }
    if (back === "BUW" && forward !== "WUB") {
      isWriting = true;
      original += " ";
    }
    if (isWriting) {
      original += song[i];
    }
  }
  return original.trim();
}
