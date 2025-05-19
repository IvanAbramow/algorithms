function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let counter = 0;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === k) {
      counter++;
      left++;
      right--;

      continue;
    }

    if (sum > k) {
      right--;
      continue
    }

    if (sum < k) {
      left++;
    }
  }

  return counter;
};

console.log(maxOperations([1, 1], 1))
console.log(maxOperations([1, 2, 3, 4, 5], 5))
console.log(maxOperations([1, 2, 3, 4], 5))
console.log(maxOperations([3, 1, 3, 4, 3], 6))
