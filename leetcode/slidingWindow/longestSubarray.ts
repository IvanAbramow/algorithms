function longestSubarray(nums: number[]): number {
  let left = 0;
  let maxLength = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }

      left++;
    }

    maxLength = Math.max(maxLength, i - left);
  }

  return maxLength;
}

// console.log(longestSubarray([1,1,0,1]))
// console.log(longestSubarray([1,1,0,0,1]))
// console.log(longestSubarray([1,1,1]))
// console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))

function longestNullSubarray(nums: number[], k: number) {
  let zeroCount = 0;
  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[start] === 0) {
        zeroCount--;
      }

      start++;
    }

    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

// console.log(longestNullSubarray([1,1,0,0,1,1,0,1,1,1], 2));


function maxAverageSubarray(nums: number[], k: number) {
  let left = 0;
  let result = 0;
  let windowSum = 0;

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];

    while (windowSum > k) {
      windowSum -= nums[left];
      left++;
    }

    result = Math.max(result, i - left + 1);
  }

  return result;
}

function maxSubarraySum(nums: number[], k: number) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let resultSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    resultSum = Math.max(resultSum, sum);
  }

  return resultSum;
}

function minSubarrayLength(nums: number[], s: number) {
  let left = 0;
  let windowSum = 0;
  let minLength = nums.length + 1;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= s) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLength ?? 0;
}

function minSubarrayWithOneNull(nums: number[]) {
  let left = 0;
  let nullCount = 0;

  let resultSum = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      nullCount++;
    }

    resultSum += nums[right];

    while (nullCount > 1) {
      if (nums[left] === 0) {
        nullCount--;
      }

      resultSum -= nums[left];
      left++;
    }
  }

  return resultSum;
}

function subarraySumEqualsK(nums: number[], k: number) {
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    if (sum === k) {
      return true;
    }
  }

  return false;
}

function maxSubarrayAverage(nums: number[], k: number) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let resultAverage = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    resultAverage = Math.max(resultAverage, sum / k);
  }

  return resultAverage;
}

// console.log(maxSubarrayAverage([5, 6, 7, 8, 4], 2))


function maxStringLengthWithoutRepeats(s: string) {
  let maxLength = 0;
  let left = 0;

  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }

    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function maxSubarraySum1(nums: number[], k: number) {
  let maxSum = -Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    console.log(sum)

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    console.log(sum)

    if (sum <= k) {
      maxSum = Math.max(maxSum, sum);
    }

    console.log(maxSum)
  }

  return maxSum;
}

function maxSubarrayLengthLessThanK(s: string, k: number) {
  let left = 0;

  const map = new Map<string, number>();
  let maxLength = 0;
  let uniqueSymbols = 0;


  for (let right = 0; right < s.length; right++) {
    map.set(s[right], map.get(s[right]) ? map.get(s[right]) + 1 : 1);

    if (map.get(s[right]) === 1) {
      uniqueSymbols++;
    }

    while (uniqueSymbols > k) {
      map.set(s[left], map.get(s[left]) - 1);

      if (map.get(s[left]) === 0) {
        uniqueSymbols--;
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    console.log(maxLength)
  }

  return maxLength;
}

console.log(maxSubarrayLengthLessThanK('eceeba', 2))
// console.log(maxSubarrayLengthLessThanK('ecbac', 2))

// console.log(maxSubarraySum1([2, 1, -3, 4, -1, 2, 1, -5, 4], 5));
// console.log(maxSubarraySum1([2, -1, 2, 3, -2, 4], 5));
// console.log(maxSubarraySum1([10, 7, 6], 5));
// console.log(maxSubarraySum1([3, 2, 7, 1], 6));

// console.log(maxStringLengthWithoutRepeats('qwertquy'));

// console.log(subarraySumEqualsK([1, 2, 3, 7, 5], 12))

// console.log(minSubarrayWithOneNull([1, 0, 1, 1, 0, 1]))

// console.log(minSubarrayLength([2,3,1,2,4,3], 7))
// console.log(maxSubarraySum([2, 1, 3, 4, 1, 2], 3))

// console.log(maxAverageSubarray([1, 2, 1, 0, 1, 1, 0], 4));
