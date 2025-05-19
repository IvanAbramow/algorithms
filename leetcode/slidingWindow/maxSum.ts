function maxSum(nums: number[], k: number) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  console.log(sum);

  let max = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum)
  }

  return max;
}

console.log(maxSum([1, 5, 2, 3, 7, 1], 3));
