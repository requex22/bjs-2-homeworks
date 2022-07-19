function compareArrays(arr1, arr2) {
  let result = arr1.every((value, index) => value === arr2[index] && arr1.length === arr2.length);
  return result;
}

console.log(compareArrays([6,2,3],[6,2,3]))

function advancedFilter(arr) {
  let resultArr = arr.filter(element => element > 0 && element % 3 === 0).map(element => element * 10)
  return resultArr; 
}

console.log(advancedFilter([2, 4, 5, 6, 9, 10]))