function isomorph(str1: string, str2: string): boolean {
  const mapFirst = new Map<string, string>();
  const mapSecond = new Map<string, string>();

  for (let i = 0; i < str1.length; i++) {
    if (mapFirst.has(str1[i]) && mapFirst.get(str1[i]) !== str2[i]) {
      return false;
    }

    if (mapSecond.has(str2[i]) && mapSecond.get(str2[i]) !== str1[i]) {
      return false;
    }

    mapFirst.set(str1[i], str2[i]);
    mapSecond.set(str2[i], str1[i]);
  }

  return true;
}

console.log(isomorph('egg', 'add'))
