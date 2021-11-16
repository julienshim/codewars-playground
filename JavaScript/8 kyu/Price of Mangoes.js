function mango(quantity, price){
    const offer = Math.floor(quantity/3) * 2
    const remainder = quantity % 3;
    return (offer + remainder) * price
  }