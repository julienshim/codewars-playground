import Foundation

extension String {
    func toJadenCase() -> String {
      let arr = self.components(separatedBy: " ")
      let cArr = arr.map { $0.prefix(1).uppercased() + $0.lowercased().dropFirst() }
      return cArr.joined(separator: " ")
    }
}