function correct(string)
{
	const correction = {
    "5": "S",
    "0": "O",
    "1": "I"
  }
  return string.split("").map(x => x = correction[x] !== undefined ? correction[x] : x).join(""); 
}
