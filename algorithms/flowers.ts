function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  // console.log(flowerbed)

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const emptyLeftPlot = i === 0 || flowerbed[i - 1] === 0;
      const emptyRightPlot = i === flowerbed.length - 1 || flowerbed[i - 1] === 0;

      if (emptyLeftPlot && emptyRightPlot) {
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1;
          count++;
        }

        // console.log(flowerbed)

        if (count >= n) {
          return true;
        }
      }
    }
  }

  if (count <= n) {
    flowerbed.reverse()

    for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
        const emptyLeftPlot = i === 0 || flowerbed[i - 1] === 0;
        const emptyRightPlot = i === flowerbed.length - 1 || flowerbed[i - 1] === 0;

        console.log(i);
        console.log(flowerbed.length - 1);

        if (emptyLeftPlot && emptyRightPlot) {
          // if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            count++;
          // }

          // console.log(flowerbed)

          if (count >= n) {
            return true;
          }
        }
      }
    }
  }
  return count >= n;
}

// console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
// console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false
// console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // false
// console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2)) // true
// console.log(canPlaceFlowers([0,0,1,0,1], 1)) // true
// console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2)) // true
// console.log(canPlaceFlowers([0], 1)) // true
// console.log(canPlaceFlowers([0], 0)) // false
// console.log(canPlaceFlowers([0], 2)) // false
// console.log(canPlaceFlowers([0,0,1,0,0], 1)) // true
// console.log(canPlaceFlowers([0,0,1,0,0], 2)) // true
// console.log(canPlaceFlowers([1,0,0], 1)) // true
// console.log(canPlaceFlowers([0,0,0,0], 1)) // true
// console.log(canPlaceFlowers([1,0,1,0,0,1,0], 1)) // false
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // true
// console.log(canPlaceFlowers([1,0,0,0,0,1], 2)); // false
