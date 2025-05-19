function lastAndFirst(nums: number[]): number[] {
  const queue: number[] = [];

  if (nums.length === 1) {
    queue.push(nums[0]);
    return queue;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      queue.push(nums[i]);
      continue;
    }

    if (i === nums.length - 1) {
      queue.push(nums[i]);
    }
  }

  return queue;
}

console.log(lastAndFirst([7, 12, 5, 19, 3]));
console.log(lastAndFirst([7]));
