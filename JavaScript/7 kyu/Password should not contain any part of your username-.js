function validate(username, password){
    //your code here
    var short = username.length < password.length ? username : password;
    var half = Math.ceil(short.length / 2)
    var lessThanHalf = password.length - half + 1
    for (var i = 0; i < lessThanHalf; i++) {
        var shift = i + half
        if (username.indexOf(password.slice(i, shift)) > -1) {
            return false
        }
    }
    return true
  }