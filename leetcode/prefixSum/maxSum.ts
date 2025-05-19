// function maxSubarraySum(nums: number[], k: number): number {
//   let sum = 0;
//
//   for (let i = 0; i < k; i++) {
//     sum += nums[i];
//   }
//
//   let maxSum = sum;
//
//   for (let i = k; i < nums.length; i++) {
//     sum += nums[i] - nums[i - k];
//
//     maxSum = Math.max(maxSum, sum);
//   }
//
//   return maxSum;
// }

function buildPrefixSum(nums: number[]): number[] {
  const prefixSum: number[] = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  return prefixSum;
}

function maxSubarraySum(nums: number[], k: number): number {
  const prefixSum = buildPrefixSum(nums);
  console.log(prefixSum);
  let maxSum = -Infinity;

  for (let r = k - 1; r < nums.length; r++) {
    console.log(r)
    let sum;

    if (r - k < 0) {
      sum = prefixSum[r];
    } else {
      sum = prefixSum[r] - prefixSum[r - k];
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));



