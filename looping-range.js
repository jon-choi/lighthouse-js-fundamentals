function range(start, end, step) {
  const anArray = [];
  for (let i = start; i <= end; i += step) {
    if (start === undefined || end === undefined || step === undefined) {
      return anArray;
    } else if (start > end) {
      return anArray;
    } else if (step <= 0) {
      return anArray
    } else {
      anArray.push(i);
    }
  }
  return anArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));