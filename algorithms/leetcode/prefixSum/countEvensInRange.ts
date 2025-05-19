function buildEvenPrefixSum(nums: number[]) {
  let evensCounter = 0;
  const prefix: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evensCounter++;
    }

    prefix[i] = evensCounter;
  }

  return prefix;
}

function countEvensInRange(nums: number[], l: number, r: number) {
  const prefixSum = buildEvenPrefixSum(nums);

  if (l === 0) {
    return prefixSum[r];
  } else {
    return prefixSum[r] - prefixSum[l - 1];
  }
}


console.log(countEvensInRange([2, 5, 8, 3, 6, 7], 2, 5));
