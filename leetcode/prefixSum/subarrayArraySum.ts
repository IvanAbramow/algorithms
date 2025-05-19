function buildPrefixSum(nums: number[]): number[] {
  const prefixSum: number[] = [];

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  return prefixSum;
}

function subArraySum(nums: number[], queries: Array<Array<number>>) {
  const prefixSum = buildPrefixSum(nums);

  let arraySum: number[] = [];

  queries.forEach(([l, r]) => {
    if (l === 0) {
      arraySum.push(prefixSum[r]);
    } else {
      arraySum.push(prefixSum[r] - prefixSum[l - 1]);
    }
  });

  return arraySum;
}


console.log(subArraySum([1, 3, 2, 8, 5, 7], [ [0, 3], [1, 4], [2, 5] ]));
