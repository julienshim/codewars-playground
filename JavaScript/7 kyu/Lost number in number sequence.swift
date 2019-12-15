func findDeletedNumber(_ array: [Int], _ mixArray: [Int]) -> Int {
    // your code
    return array.reduce(0, +) - mixArray.reduce(0, +)
}
