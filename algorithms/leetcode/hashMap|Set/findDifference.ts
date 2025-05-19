function findDifference(nums1: number[], nums2: number[]): number[][] {
  const firstSet = new Set<number>(nums1);
  const secondSet = new Set<number>(nums2);

  const firstArray: number[] = [];
  const secondArray: number[] = [];

  for (const num of nums1) {
    if (!secondSet.has(num)){
      firstArray.push(num);
    }
  }

  for (const num of nums2) {
    if (!firstSet.has(num)){
      secondArray.push(num);
    }
  }

  return [firstArray, secondArray];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1,2,3,3], [1,1,2,2]));
