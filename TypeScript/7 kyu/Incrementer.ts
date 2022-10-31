export function incrementer(nums: number[]) {
    // your code here
    return nums.map((x,i) => (x + i + 1) % 10);
  }