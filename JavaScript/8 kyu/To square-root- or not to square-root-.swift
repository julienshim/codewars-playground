import Foundation

func squareOrSquareRoot(_ input: [Int]) -> [Int] {
  var array: Array = [Int]()
  for i in input {
    let root = Int(Double(i).squareRoot())
    array.append(root * root == i ? root : i * i)
  }
  return array;
}
