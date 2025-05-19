function productExceptSelf(nums: number[]): number[] {
  const answer: number[] = new Array(nums.length).fill(1);
  console.log(answer);

  let left = 1;
  console.log(left);

  for (let i = 0; i < nums.length; i++) {
    answer[i] = answer[i] * left;
    left = left * nums[i];
    console.log(left);
    console.log(answer);
  }

  left = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(answer[i]);
    console.log(left);
    answer[i] = answer[i] * left;
    console.log(answer[i]);
    console.log(nums[i])
    left = left * nums[i];
    console.log(left);
    console.log(answer);
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));
