function solution(A, K) {
	const newArr = [];
	for(let i = 0; i < A.length; i++){
		newArr[(i + K) % (A.length)] = A[i]
	}
// 	console.log(newArr);
	return newArr;
}

let A = [1, 2, 3, 4, 5];
let K = 3;
console.log(solution(A, K));