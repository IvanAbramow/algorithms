function deque(nums: number[], k: number): number[] {
  const deque: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
      console.log(deque)
    }

    deque.push(i);

    console.log(deque)
    console.log(i - k)

    if (deque[0] <= i - k) {
      deque.shift()
    }

    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
    console.log(result)
  }

  return result
}

console.log(deque([2, 1, 3, 4, 6, 3, 8, 9, 10, 12, 56], 4));
