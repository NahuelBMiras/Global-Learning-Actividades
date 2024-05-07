export function par(text) {
  let i = 0;
  for (const char of text) {
    if (char % 2 === 0) {
      i++;
    }
  }
  return i;
}
