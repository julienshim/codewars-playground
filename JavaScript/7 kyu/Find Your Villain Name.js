function getVillainName(birthday){
  const m = { 
    "Jan": "The Evil",
    "Feb": "The Vile",
    "Mar": "The Cruel",
    "Apr": "The Trashy",
    "May": "The Despicable",
    "Jun": "The Embarrassing",
    "Jul": "The Disreputable",
    "Aug": "The Atrocious",
    "Sep": "The Twirling",
    "Oct": "The Orange",
    "Nov": "The Terrifying",
    "Dec": "The Awkward"
  };
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  const [day, month, date, year, time, gmt, type] = String(birthday).split(" ");
  const end = date.slice(-1);
  return `${m[month]} ${d[end]}`
}