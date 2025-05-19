function compress(chars: string[]): number {
  const map = new Map<string, number>();

  for (const char of chars) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, Number(map.get(char)) + 1);
    }
  }

  const result: (string | number)[] = [];

  for (const [key, value] of map) {
    result.push(key);

    if (value > 1) {
      result.push(...value.toString());
    }
  }


  return result.length;
}

console.log(compress(["a","a","b","b","c","c","c"]))
console.log(compress(["a"]))
console.log(compress(["a", "a"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
