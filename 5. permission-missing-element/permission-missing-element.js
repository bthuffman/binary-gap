//This first one works. Both use a magical mathematical equation that pulls the length of an array into a formula and use it to find a missing number in what should be a consecutive list. See replit in notes for series of other attempts that maybe were never going to work.
arrayOne = [1, 2, 3, 5, 6, 7, 8, 9, 10];

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	//creates variable (size) equal to the length of the array length
	let size = A.length;
	//
	let sum = (size + 1) * (size + 2) / 2;
	console.log("first " + sum);
	console.log(size);
	for (i = 0; i < size; i++) {
		console.log(A[i]);
		sum -= A[i];
		console.log("second " + sum);
	}
	return sum;
}

solution(arrayOne);

//This second one works too
// function solution(A) {
// 	if (!A.length) return 1;
// 	let n = A.length + 1;
// 	return (n + (n * n - n) / 2) - A.reduce((a, b) => a + b);
// }

// We return 1 if the given array is empty, which is the missing element in an empty array.
//
// 	Next we calculate the 'ordinary' series sum, assuming the first element in the series is always 1. Then we find the difference between the given array and the full series, and return it. This is the missing element.
//
// 	The mathematical function I used here are series sum, and last element:
//
// 	Sn = (n/2)*(a1 + an)
// an = a1 + (n - 1)*d
//
