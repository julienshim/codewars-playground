function decipherThis(str) {
//have fun!
  let split = str.split(" ");
  split.forEach(function(test) {
    let number = test.match(/\d/g).join("");
    let newTest = test.replace(number, String.fromCharCode(number));
    if (newTest.length >= 2) {
      let tamp = newTest[1];
      newTest[1] = '$';
    }
    console.log(newTest);
  })
}; 
