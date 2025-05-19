function maxSubarrayWithoutRepeats(nums: number[]) {
  let left = 0;
  let maxLength = 0;

  const map = new Map<number, number>();

  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], map.get(nums[right]) ? map.get(nums[right]) + 1 : 1);

    while (map.get(nums[right]) > 1) {
      map.set(nums[left], map.get(nums[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(maxSubarrayWithoutRepeats([2, 3, 5, 3, 4, 1, 5, 6]));
