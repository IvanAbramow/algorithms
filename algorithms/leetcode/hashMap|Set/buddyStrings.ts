function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const firstWordMap = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
      firstWordMap.set(s[i], firstWordMap.get(s[i]) ? firstWordMap.get(s[i]) + 1 : 1);

      if (firstWordMap.get(s[i]) > 1) {
        return true;
      }
    }
  }

  if (s !== goal) {
    const indexes: number[] = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        indexes.push(i);
      }
    }

    if (indexes.length !== 2) {
      return false;
    }

    if (swap(s, indexes) === goal){
      return true;
    }
  }

  return false;
}

function swap(s: string, [l, r]: number[]) {
  const sToArray = Array.from(s);
  [sToArray[l], sToArray[r]] = [sToArray[r], sToArray[l]];
  return sToArray.join('');
}


console.log(buddyStrings('ab', 'ba'));
console.log(buddyStrings('ab', 'ab'));
console.log(buddyStrings('aa', 'aa'));
