function stringIsAnagram(s1: string, s2: string): boolean {
  const firstStringMap = new Map<string, number>();

  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    firstStringMap.set(s1[i], firstStringMap.has(s1[i]) ? firstStringMap.get(s1[i]) + 1 : 1);
  }

  for (let i = 0; i < s2.length; i++) {
    if (firstStringMap.has(s2[i])) {
      firstStringMap.set(s2[i], firstStringMap.get(s2[i]) - 1);
    }

    if (firstStringMap.get(s2[i]) < 0) {
      return false;
    }
  }


  for (const value of firstStringMap.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true
}

console.log(stringIsAnagram('listen', 'silent'));
console.log(stringIsAnagram('listen', 'sillent'));
