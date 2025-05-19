function zip(a: number[], b: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < b.length; i++) {
    if (a[i]) {
      result.push(a[i]);
    }
    result.push(b[i]);
  }

  return result;
}


console.log(zip([1,2,3], [4, 5, 6, 7]))
