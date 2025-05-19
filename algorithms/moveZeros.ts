/**
 Do not return anything, modify nums in-place instead.
 */
function swap({ nums, start, end }: { nums: number[]; start: number; end: number }) {
  const temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}

function moveZeroes(nums: number[]): void {
  // nums.sort((a, b) => a - b);
  console.log(nums);

  let start = 0;
  let end = nums.length - 1;

  // nums.sort((a, b) => {
  //   if (a === 0 && b !== 0) return 1;
  //   if (a !== 0 && b === 0) return -1;
  // });

  console.log(nums);

  while (start < end) {
    console.log(start);
    console.log(nums[start]);
    if (nums[start] === 0) {
      swap({ nums, start, end });

      start++;
      end--;

      console.log(nums);

      continue;
    }

    start++;
  }
  console.log(nums);
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([1,2]));
