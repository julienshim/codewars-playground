function validateUsr(username) {
    res = /^[a-z_0-9]{4,16}$/.test(username) //regex here/.test(username) 
    return res
  }