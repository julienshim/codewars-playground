export function getGrade(a: number, b: number, c: number): string {
    // your code here
    const sum = [...arguments].reduce((a,c) => a + c);
    const average = sum / [...arguments].length;
    switch(true) {
        case average >= 90:
          return 'A'
          break;
        case average >= 80:
          return 'B'
          break;
        case average >= 70:
          return 'C'
          break;
        case average >= 60:
          return 'D'
          break;
        default:
          return 'F'
    }
  }