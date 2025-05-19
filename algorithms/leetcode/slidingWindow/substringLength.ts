function substringLength(s: string) {
  const stringArray = s.split('');

  let start = 0;

  const map = new Map<string, number>();

  let maxLength = 0;

  for (let i = 0; i < stringArray.length; i++) {
    if (map.has(stringArray[i])) {
      start = Math.max(start, map.get(stringArray[i]) + 1)
    }

    maxLength = Math.max(maxLength, i - start + 1);
    map.set(stringArray[i], i);
  }

  console.log(maxLength)

  return maxLength;
}

function substringLength2(s: string) {
  const stringArray = s.split('');

  let start = 0;

  const map = new Map<string, number>();

  let maxLength = 0;

  for (let i = 0; i < stringArray.length; i++) {
    if (map.has(stringArray[i])) {
      start = Math.max(start, map.get(stringArray[i]) + 1)
    }

    maxLength = Math.max(maxLength, i - start + 1);
    map.set(stringArray[i], i);

    console.log(map)
  }

  console.log(maxLength)

  return maxLength;
}

// console.log(substringLength('abcabcbb'))
// console.log(substringLength('abcabfcbb'))
console.log(substringLength2('eceba'))
