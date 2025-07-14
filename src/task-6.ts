function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(["a", "b", "c"]); // "a"
getFirstElement([true, false, true]); // true

console.log(getFirstElement([1, 2, 3] as number[]));
console.log(getFirstElement(["a", "b", "c"] as string[]));
console.log(getFirstElement([true, false, true] as boolean[]));
