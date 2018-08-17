function solution(num){
    var solSum = 0;
    for (var i = 0; i < num; i++) {
        if (i % 15 === 0) {
            solSum += i;
        } else {
            if (i % 3 === 0 || i % 5 === 0 ) {
                solSum += i;
            }
        }
    }
    return solSum;
}