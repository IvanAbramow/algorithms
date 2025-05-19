function swap(arr: string[], left: number, right: number) {
  const temp = arr[left];
  console.log(temp)
  console.log(arr[left])
  console.log(arr[right])

  arr[left] = arr[right];
  console.log(arr[left])
  arr[right] = temp;
  console.log(arr[right])
}

function revertVowels(s: string) {
  const vowels = 'aeuioAEUIO'
  let arr = s.split('');

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!vowels.includes(s[left])) {
      left++;
    } else if (!vowels.includes(s[right])) {
      right--;
    } else {
      swap(arr, left, right);

      left++
      right--;
    }
  }

  return arr.join('');
}

console.log(revertVowels('leetcode'))
