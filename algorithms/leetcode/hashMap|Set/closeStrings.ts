function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  const firstWordSet = new Set(word1);
  const secondWordSet = new Set(word2);

  if (!Array.from(firstWordSet).every(char => secondWordSet.has(char))) {
    return false;
  }

  const firstWordMap = new Map<string, number>();
  const secondWordMap = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    firstWordMap.set(word1[i], firstWordMap.get(word1[i]) ? firstWordMap.get(word1[i]) + 1 : 1);
    secondWordMap.set(word2[i], secondWordMap.get(word2[i]) ? secondWordMap.get(word2[i]) + 1 : 1);
  }

  const firstWordValues = Array.from(firstWordMap.values()).sort((a, b) => a - b);
  const secondWordValues = Array.from(secondWordMap.values()).sort((a, b) => a - b);

  return firstWordValues.toString() === secondWordValues.toString();
}

console.log(closeStrings('abc', 'bca'))
