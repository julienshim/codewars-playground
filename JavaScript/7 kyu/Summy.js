function summy(stringOfInts){
    //... sum of ints found in string
    return stringOfInts.split(" ").reduce((a,b) => +a + +b, 0)
}
