function firstDuplicate(nums: number[]): number | null {
  // const map = new Map<number, number>();
  //
  // for (let i = 0; i < nums.length; i++) {
  //   map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
  //
  //   if (map.get(nums[i]) === 2) {
  //     return nums[i];
  //   }
  // }

  const map = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    } else {
      map.add(nums[i]);
    }
  }

  return null
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
