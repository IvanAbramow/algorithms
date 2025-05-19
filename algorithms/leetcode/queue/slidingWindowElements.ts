function slidingWindowElements(capacity: number, nums: number[]): number[] {
  const queue: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    queue.push(nums[i]);

    while (queue.length > capacity) {
      queue.shift();
    }
  }

  return queue;
}

console.log(slidingWindowElements(3, [7, 9, 12, 5, 11]));
