function removeSmallest(numbers) {
    var smallestNumber = Math.min(...numbers);
    var position = numbers.indexOf(smallestNumber);
    return [...numbers.slice(0, position),
			...numbers.slice(position+1)]
}