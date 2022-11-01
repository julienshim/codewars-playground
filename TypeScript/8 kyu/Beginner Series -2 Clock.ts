export function past(h: number, m: number, s: number): number {
    //#Happy Coding! ^_^
    let seconds = 0;
    if (h > 0) {
      seconds += h * 3600;
    }
    if (m > 0) {
      seconds += m * 60;
    }
    if (s > 0) {
      seconds += s;
    }
    return seconds * 1000;
  }