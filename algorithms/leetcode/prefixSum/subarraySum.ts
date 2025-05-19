function buildPrefixSum(nums: number[]): number[]{
  const prefixSumArray: number[] = [];

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSumArray[i] = sum;
  }

  return prefixSumArray;
}

function sumBetweenElements({ nums, firstElement, secondElement }: { nums: number[], firstElement: number, secondElement: number }) {
  const prefixSumArray = buildPrefixSum(nums);
  console.log(prefixSumArray);

  if (firstElement === 0) {
    return prefixSumArray[secondElement];
  } else {
    console.log(prefixSumArray[secondElement])
    console.log(prefixSumArray[firstElement - 1])
    return prefixSumArray[secondElement] - prefixSumArray[firstElement - 1];
  }
}

console.log(sumBetweenElements({ nums: [7, 2, 5, 3, 6], firstElement: 1, secondElement: 3 }));
