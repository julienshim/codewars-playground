function rgb(r, g, b){
    var hex = [r.toString(16), g.toString(16), b.toString(16)];
    var rgbToHex = ''
    hex.forEach(function(rgb){
      if (rgb < 0) {
        rgbToHex += "00";
      } else if (rgb.length > 2) {
        rgbToHex += "ff";
      } else if (rgb.length < 2) {
        rgbToHex += ("0" + rgb);
      } else {
        rgbToHex += rgb;
      }
    });
    return rgbToHex.toUpperCase();
  }

//   I am aware this is a really hacky solution.