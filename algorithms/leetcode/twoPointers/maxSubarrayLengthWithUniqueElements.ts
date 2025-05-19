function maxSubarrayLengthWithUniqueElements(nums: number[], k: number) {
  let uniqueElements = 0;
  let left = 0;
  let maxLength = 0;

  const map = new Map<number, number>();

  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], map.get(nums[right]) ? map.get(nums[right]) + 1 : 1);

    if (map.get(nums[right]) === 1) {
      uniqueElements++;
    }

    while (uniqueElements > k) {
      map.set(nums[left], map.get(nums[left]) - 1);

      if (map.get(nums[left]) === 0) {
        uniqueElements--;
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(maxSubarrayLengthWithUniqueElements([1, 2, 1, 2, 3], 2))
