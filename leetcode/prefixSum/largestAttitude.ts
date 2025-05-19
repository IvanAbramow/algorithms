function buildPrefixSum(nums: number[]): number[] {
  let sum = 0;
  const prefixSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum
  }

  return prefixSum;
}

function largestAltitude(gain: number[]): number {
  const prefixSum = buildPrefixSum(gain);

  return Math.max(0, ...prefixSum);
}

console.log(largestAltitude([-5,1,5,0,-7]))
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))
