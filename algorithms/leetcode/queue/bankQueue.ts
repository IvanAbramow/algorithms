function bankQueue(startQueue: number[], newClients: { step: number; client: number }[]): number[] {
  const resultQueue: number[] = [];
  const queueCopy = startQueue;

  let step = 0;

  while (queueCopy.length > 0) {
    let served = queueCopy.shift();
    resultQueue.push(served);

    step++;

    const foundedClients = newClients.filter((client) => client.step === step);

    if (foundedClients) {
      foundedClients.forEach(({ client }) => queueCopy.push(client));
    }
  }

  return resultQueue;
}

console.log(bankQueue([10, 22, 35], [
  { step: 1, client: 44 },
  { step: 1, client: 45 },
  { step: 2, client: 61 },
]));
