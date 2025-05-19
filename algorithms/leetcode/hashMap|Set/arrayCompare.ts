function arrayCompare(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>();

  for (let i = 0; arr1.length > i; i++) {
    map.set(arr1[i], map.get(arr1[i]) ? map.get(arr1[i]) + 1 : 1);
  }

  const resultArray: number[] = [];

  for (let i = 0; i < arr2.length; i++) {
    if (map.get(arr2[i]) && map.get(arr2[i]) > 0) {
      resultArray.push(arr2[i]);
      map.set(arr2[i], map.get(arr2[i]) - 1);
    }
  }

  return resultArray;
}

console.log(arrayCompare([1,2,2,1], [2,2]))
console.log(arrayCompare([4,9,5], [9,4,9,8,4]))
