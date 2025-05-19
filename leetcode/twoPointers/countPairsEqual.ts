function countPairsEqual(nums: number[], k: number) {
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    while (left < right && nums[right] - nums[left] > k) {
      left++;
    }

    if (left < right && nums[right] - nums[left] === k) {
      count++;
    }
  }

  return count;
}

console.log(countPairsEqual([1, 3, 5, 6, 8, 10], 2))
