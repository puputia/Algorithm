
function solution(arr1, arr2) {
  let test = arr1.map((item, i) => item.map((item2, j) => item2+arr2[i][j]));
  return test;
}