function unionArray() {
  let array1 = [10, 20, 30, 40];
  let array2 = [10, 20, 45, 65, 43, 54];

  let merge = [];
  for (let i = 0; i < array1.length; i++) {
    if (!merge.includes(array1[i])) {
      merge.push(array1[i]);
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (!merge.includes(array2[j])) {
      merge.push(array2[j]);
    }
  }
  return merge;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log("Union:", unionArray(array1, array2));
