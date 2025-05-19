function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;

  for (let j = k; j < nums.length; j++) {
    sum += nums[j] - nums[j - k];
    max = Math.max(max, sum);
  }

  return max/k;
}


console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
