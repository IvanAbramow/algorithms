function getTargetSum(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum > target) {
      right--
    } else if (sum < target) {
      left++;
    } else {
      return true
    }
  }

  return false
}

console.log(getTargetSum([1, 2, 4, 7, 11, 15], 9))
