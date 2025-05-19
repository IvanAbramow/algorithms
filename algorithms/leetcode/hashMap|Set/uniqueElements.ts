function uniqueElements(values: Array<number>): Array<number> {
  const map = new Set<number>(values);

  return Array.from(map);
}

console.log(uniqueElements([1,2,2,3,4,4,4,5]))
