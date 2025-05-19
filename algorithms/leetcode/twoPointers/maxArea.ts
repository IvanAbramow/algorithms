function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let square = 0;
  let maxSquare = 0;

  while (left < right) {
    square = Math.min(height[left], height[right]) * (right - left);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }

    maxSquare = Math.max(maxSquare, square);
  }

  return maxSquare;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
