// Задание 1
function getArrayParams(arr) {
  let min = 100;
  let max = -100;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
	if (max < arr[i]) {
		max = arr[i];
	}

	if (min > arr[i]) {
		min = arr[i];
	}

	sum += arr[i];

	avg = +(sum / Number(arr.length)).toFixed(2);
  }

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams([-30, 15, 30]));

// Задание 2
function worker(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
  }

  return sum;
}

console.log(worker([1, 2, 3, 4]))

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
	func(arrOfArr[i]);

	if (func(arrOfArr[i]) > max) {
		max = func(arrOfArr[i]);
	}							
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
	if (min > arr[i]) {
		min = arr[i];
	}

	if (max < arr[i]) {
		max = arr[i];
	}
  }

  return Math.abs(max-min);
}
