function buildPrefixSum(nums: number[]) {
  let sum = 0;

  const prefixSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  return prefixSum;
}

function getSum(prefixSums: number[], [l, r]: number[]): number {
  if (l === 0) {
    return prefixSums[r];
  } else {
    return prefixSums[r] - prefixSums[l - 1];
  }
}

function subArraySumDiff(nums: number[], left: number[], right: number[]): number {
  const prefixSum = buildPrefixSum(nums);

  return getSum(prefixSum, left) - getSum(prefixSum, right);
}

console.log(subArraySumDiff([10, 20, 30, 40, 50], [1, 3], [2, 4]));
