function slidingWindowAverage(nums: number[], window: number): number[] {
  const queue: number[] = [];

  let averageArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    queue.push(nums[i]);

    if (queue.length === window) {
      let num = 0;

      queue.forEach((value) => num += value);

      averageArray.push(num/window);
      queue.shift()
      num = 0;
    }
  }

  return averageArray;
}

function slidingWindowMax(nums: number[], window: number): number[] {
  const queue: number[] = [];

  let maxNums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    queue.push(nums[i]);

    if (queue.length === window) {
      let num = 0;

      queue.forEach((value) => num += value);

      maxNums.push(Math.max(...queue));
      queue.shift()
      num = 0;
    }
  }

  return maxNums;
}

// console.log(slidingWindowAverage([1, 3, 5, 7, 9, 11], 3));
console.log(slidingWindowMax([2, 1, 3, 4, 6, 3, 8, 9, 10, 12, 56], 4));
