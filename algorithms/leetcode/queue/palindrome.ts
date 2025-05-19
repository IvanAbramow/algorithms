function isPalindrome(s: string): boolean {
  const deque: string[] = [];

  for (let i = 0; i < s.length; i++) {
    deque.push(s[i]);
  }

  while (deque.length > 1) {
    const first = deque.shift();
    const last = deque.pop();

    if (first !== last) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('level'));
console.log(isPalindrome('levvel'));
console.log(isPalindrome('hello'));
