var Ghost = function () {
  // your code goes here
  this.color = getRandomColor();

  function getRandomColor() {
    const colors = ["white", "yellow", "purple", "red"];
    const randomInt = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return colors[randomInt];
  }
};
