function buildPrefixSum(nums: number[]): number[] {
  const prefixSum: number[] = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  return prefixSum;
}

function pivotIndex(nums: number[]): number {
  const prefixSum = buildPrefixSum(nums);
  console.log(prefixSum);
  const totalSum = prefixSum[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    console.log(i)
    const leftSum = i === 0 ? 0 : prefixSum[i - 1];
    const rightSum = totalSum - prefixSum[i];

    console.log(leftSum)
    console.log(rightSum)

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}


console.log(pivotIndex([1,7,3,6,5,6]))
