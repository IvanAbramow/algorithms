function rpn(s: string): number {
  const tokens = s.split(' ');
  console.log(tokens);

  const stack: number[] = [];

  const notNumbers = '+-*/'

  for (let i = 0; i < tokens.length; i++) {
    if (notNumbers.includes(tokens[i])) {
      if (tokens[i] === '+') {
        const first = stack.at(-1);
        const second = stack.at(-2);

        stack.pop();
        stack.pop();
        stack.push(first + second);
      }

      if (tokens[i] === '*') {
        const first = stack.at(-1);
        const second = stack.at(-2);

        stack.pop();
        stack.pop();
        stack.push(first * second);
      }
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack.at(-1);
}

console.log(rpn('2 1 + 3 *'))
console.log(rpn("12 3 + 4 *"))
