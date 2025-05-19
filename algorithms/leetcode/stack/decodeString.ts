function decodeString(s: string): string {
  const stack: Array<Array<string>> = [];

  let currentNumber = '';
  let currentString = '';

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      currentNumber += s[i];
    }

    if (s[i] === '[') {
      stack.push([currentString, currentNumber]);
      currentNumber = '';
      currentString = '';
    }

    if (isNaN(Number(s[i])) && s[i] !== '[' && s[i] !== ']') {
      currentString += s[i];
    }

    if (s[i] === ']') {
      const num = stack.at(-1).at(1);
      const prevString = stack.at(-1).at(0);

      stack.pop()

      currentString = prevString + currentString.repeat(Number(num))
      currentNumber = ''
    }
  }

  return currentString
}


console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
