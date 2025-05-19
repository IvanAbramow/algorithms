// function gcdOfStrings(str1: string, str2: string): string {
//   const replacedString = str1.replace(str2, ',').replace(',', '');
//
//   if (!str2.includes(replacedString)) {
//     return '';
//   }
//
//   let workString = '';
//
//   let resultArray: string[] = [];
//
//   for (let i = 0; i < str2.length; i++) {
//     if (workString.length > 0) {
//       resultArray.push(str2.split(workString).at(0));
//     }
//
//     // if (workString.length > 0 && str2.split(workString).at(0).length === 0) {
//     //   break;
//     // }
//
//     workString += str2[i]
//     workString += str2.split(workString).at(-1);
//   }
//
//   let resultString = resultArray.at(-1);
//
//   const preResultString = replacedString.replaceAll(resultString, '');
//
//   if (preResultString.startsWith(resultString.at(-1))){
//     resultString = resultString + preResultString.at(0)
//   }
//
//   return resultString;
// }

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 === str2) {
    return str1;
  }

  if (str1.startsWith(str2)) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  }

  if (str2.startsWith(str1)) {
    return gcdOfStrings(str1, str2.slice(str1.length));
  }

  return '';
}


// console.log(gcdOfStrings('ABCABC', 'ABC'));
// console.log(gcdOfStrings('ABABABAB', 'ABAB'));
// console.log(gcdOfStrings('ABCDEF', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
// console.log(gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'));
// console.log(gcdOfStrings('CXTXNCXTXNCXTXNCXTXNCXTXN', 'CXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXN'));
