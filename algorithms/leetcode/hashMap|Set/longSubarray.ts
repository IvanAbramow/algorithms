function longSubarray(s: string) {
  const map = new Map<string, number>();

  let maxLength = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1);

    while (map.get(s[i]) > 1) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, i - left + 1)
  }

  return maxLength;
}

console.log(longSubarray('abcabcbb'))
