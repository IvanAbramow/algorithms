function twoSumTP(nums: number[], target: number): number[] {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let currentSum = nums[start] + nums[end];

    console.log(currentSum)

    if (currentSum === target) {
      return [start, end];
    } else if (currentSum < target) {
      start++;
    } else {
      end--;
    }
  }

  return [-1, 1];
}

function twoSumHM(nums: number[], target: number): number[] {
  const numbersMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const complement = target - element;

    if (numbersMap.has(complement)) {
      return [numbersMap.get(complement), i];
    }

    numbersMap.set(element, i);
  }
}

// console.log(twoSumTP([2,7,11,15], 9))
console.log(twoSumTP([3,2,4], 6))
console.log(twoSumHM([3,2,4], 6))
