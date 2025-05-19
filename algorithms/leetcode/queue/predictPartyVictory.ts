function predictPartyVictory(senate: string): string {
  const radiantQueue: number[] = [];
  const direQueue: number[] = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      radiantQueue.push(i);
    } else {
      direQueue.push(i);
    }
  }

  while (radiantQueue.length > 0 && direQueue.length > 0) {
    const r = radiantQueue.shift();
    const d = direQueue.shift();

    r < d ? radiantQueue.push(r + n) : direQueue.push(d + n);
  }

  return radiantQueue.length > 0 ? 'Radiant' : 'Dire';
}

console.log(predictPartyVictory('RD'));
console.log(predictPartyVictory('RDD'));
