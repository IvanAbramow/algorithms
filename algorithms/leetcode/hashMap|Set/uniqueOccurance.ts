function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) ? map.get(arr[i]) + 1 : 1);
  }

  let resultArray: number[] = [];

  const array = Array.from(map.values());

  for (const num of array) {
    if (!resultArray.includes(num)) {
      resultArray.push(num);
    } else {
      return false
    }
  }

  return true;
}


console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))
