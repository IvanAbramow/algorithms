function minSubarraySum(arr: number[], s: number) {
  let minLength = Infinity;

  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= s) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubarraySum([2, 3, 1, 2, 4, 3], 7))
