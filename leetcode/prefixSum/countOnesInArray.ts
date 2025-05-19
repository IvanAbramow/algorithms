function buildOnesInArrayPrefixSum(nums: number[]): number[] {
  let sum = 0;

  const prefixSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      sum += nums[i];
    }

    prefixSum[i] = sum
  }

  return prefixSum;
}

function countOnesInArray(arr: number[], queries: Array<Array<number>>): number[] {
  const prefixSum = buildOnesInArrayPrefixSum(arr);

  let onesCountArray: number[] = [];

  queries.forEach(([l, r]) => {
    if (l === 0) {
      onesCountArray.push(prefixSum[r]);
    } else {
      onesCountArray.push(prefixSum[r] - prefixSum[l - 1]);
    }
  })

  return onesCountArray;
}

console.log(countOnesInArray([1, 0, 1, 1, 0, 0, 1], [[0, 3], [2, 6], [1, 4]]));
