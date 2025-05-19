function slideWindow(nums: number[], k: number) {
  const resultArray: number[] = [];

  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  resultArray.push(sum/k);

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    resultArray.push(sum/k);
  }

  return resultArray;
}

console.log(slideWindow([1, 2, 3, 4, 5, 6, 7], 4))
console.log(slideWindow([9, 3, 2, 0, 1, 5, 1, 0, 0], 3))
