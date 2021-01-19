function solve(arr){
    //..
    return arr.filter(x => !arr.includes(-x))[0]
};
