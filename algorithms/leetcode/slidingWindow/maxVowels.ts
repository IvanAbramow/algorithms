function maxVowels(s: string, k: number): number {
  const vowels = 'aeiouAEIOU';

  let vowelsCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      vowelsCount++;
    }
  }

  let maxVowelsCount = vowelsCount;

  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i-k])) {
      vowelsCount--;
    }

    if (vowels.includes(s[i])) {
      vowelsCount++;
    }

    if (maxVowelsCount < vowelsCount) {
      maxVowelsCount = vowelsCount;
    }
  }

  return maxVowelsCount;
}

console.log(maxVowels('abciiidef', 3))
