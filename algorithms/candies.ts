function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxCandies = 0;

  for (const candie of candies) {
    maxCandies = Math.max(candie, maxCandies);
  }

  let result: boolean[] = [];

  for (const candie of candies) {
    const isGreatestCandies = candie + extraCandies >= maxCandies;
    result.push(isGreatestCandies);
  }

  return result;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
