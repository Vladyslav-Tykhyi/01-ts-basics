function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
getFirstElement<boolean>([true, false]);

// console.log(getFirstElement([1, 2, 3] as number[]));
// console.log(getFirstElement(["a", "b", "c"] as string[]));
// console.log(getFirstElement([true, false, true] as boolean[]));
