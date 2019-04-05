//See my replit https://repl.it/@chazz505/Cyclic-Rotation
function cyclicRotation(arr, n) {
	const newArr = [];
	for(let i = 0; i < arr.length; i++){
		function negativeN () {
			if (n < 0 & -n > arr.length) {
				n = arr.length + n;
				negativeN(n);
			}
		}
		newArr[(i + n) % (arr.length)] = arr[i]
	}
	//the following would pop off negatives that are showing up as part of each moved index, but unfortunately it isn't working...
	// for (var i = arr.length - 1; i >= 0; i--) {
	// if (arr[i] < 0) {
	//   // replace this element with the last element (guaranteed to be positive)
	//   arr[i] = arr[arr.length - 1];
	//   arr.pop();
	// }
	// }
	console.log(newArr);
	return newArr;
}

console.log(cyclicRotation([1,2,3,4,5,6], 5));