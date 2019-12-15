import Foundation

enum Operator {
    case ADD, SUBTRACT, MULTIPLY
}

func calculate(_ a:String, _ b:String, _ op:Operator) -> String {

     if let iA: Int = Int(a, radix: 2), let iB: Int = Int(b, radix: 2) {
       
       return op == Operator.ADD ? String(iA + iB, radix: 2) :
              op == Operator.SUBTRACT ? String(iA - iB, radix: 2) :
              String(iA * iB, radix: 2)
    
     } else {
     
       return "Doesn't matter what string I put in here, but should be informative."
     
     }
     
}
