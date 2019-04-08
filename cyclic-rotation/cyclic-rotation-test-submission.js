function solution(A, K) {
	const newArr = [];
	for(let i = 0; i < A.length; i++){
		//take the indexes from array A and place them into newArr, move them over by K and with the % (A.length) keep the length of new Arr = to the original length of array A
		newArr[(i + K) % (A.length)] = A[i];
	}
// 	console.log(newArr);
	return newArr;
}

let A = [1, 2, 3, 4, 5];
let K = 3;
console.log(solution(A, K));