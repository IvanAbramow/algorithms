function sortedSquares(nums: number[]): number[] {
  let squaresArray: number[] = [];

  nums.forEach(num => {
    squaresArray.push(Math.pow(num, 2))
  });

  return squaresArray.sort((a, b) => a - b);
}


console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-7,-3,2,3,11]))
