function buildOnesPrefixSum(nums: number[]) {
  let sum = 0;
  const prefixSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  return prefixSum
}

function longestOnes(nums: number[], k: number): number {
  let zeroCounter = 0;
  let maxSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCounter++;
    }

    while (zeroCounter > k) {
      if (nums[left] === 0) {
        zeroCounter--;
      }

      left++;
    }

    maxSum = Math.max(maxSum, right - left + 1);
  }

  return maxSum;
}


console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
