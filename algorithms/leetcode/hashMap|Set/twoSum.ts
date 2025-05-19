function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  let complement = 0;

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9))
