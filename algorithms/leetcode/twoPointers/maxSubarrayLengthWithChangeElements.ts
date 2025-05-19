function maxSubarrayLengthWithChangeElements(nums: number[], m: number) {
  let left = 0;
  let maxLength = 0;

  let nullCounter = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      nullCounter++;
    }

    while (nullCounter > m) {
      if (nums[left] === 0) {
        nullCounter--;
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(maxSubarrayLengthWithChangeElements([1, 0, 1, 1, 0, 0, 1, 1, 1, 0], 2));
