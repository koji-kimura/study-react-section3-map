const array1 = [0, 1, 2, 3, 4];

const newArray1 = array1.filter((output, index) => {
  return output > 3;
});

console.log(newArray1);

const array2 = ["tanaka", "suzuki", "takahashi", "nakanishi"];

const newArray2 = array2.filter((output, index) => {
  return output.length > 7;
});

console.log(newArray2);
