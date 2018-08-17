function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let j = i + 1;
        if (numbers[i] !== numbers[j]) {
            return numbers[j] === numbers[j+1] ? numbers[i] : numbers[j];
        }
    }
}