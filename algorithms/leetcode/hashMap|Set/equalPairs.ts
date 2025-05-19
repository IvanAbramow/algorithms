// function equalPairs(grid: number[][]): number {
//   let counter = 0;
//
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) {
//       let isEqual = true;
//
//       for (let k = 0; k < grid.length; k++) {
//         if (grid[i][k] !== grid[k][j]) {
//           isEqual = false;
//           break;
//         }
//       }
//       if (isEqual) {
//         counter++;
//       }
//     }
//   }
//
//   return counter;
// }

function equalPairs(grid: number[][]): number {
  const strMap = new Map<string, number>();
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const key = grid[i].join(',');

    strMap.set(key, strMap.get(key) ? strMap.get(key) + 1 : 1);
  }

  for (let j = 0; j < grid.length; j++) {
    let column: number[] = [];

    for (let k = 0; k < grid.length; k++) {
      column.push(grid[k][j]);
    }

    const key = column.join(',');

    if (strMap.has(key)) {
      count = count + strMap.get(key);
    }
  }

  return count;
}

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]));
