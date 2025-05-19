// function deleteSymbol(s: string, t: string): boolean {
//   let start = 0;
//   let end = 0;
//
//   const result: string[] = [];
//
//   while (end < t.length) {
//     if (t[end] === s[start]) {
//       result.push(t[end]);
//       start++;
//     }
//
//     end++
//   }
//
//   return s === result.join().replace(/,/g, '')
// }

function deleteSymbol(s: string, t: string): boolean {
  // s должно быть на один символ короче t
  if (t.length !== s.length + 1) return false;

  for (let i = 0; i < t.length; i++) {
    // Пробуем "удалить" символ t[i] и сравнить оставшееся с s
    const candidate = t.slice(0, i) + t.slice(i + 1);
    console.log(candidate);
    if (candidate === s) return true;
  }

  return false;
}

console.log(deleteSymbol('abc', 'abxc'));
console.log(deleteSymbol('adc', 'abxc'));
console.log(deleteSymbol('adc', 'abdc'));
