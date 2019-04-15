// https://repl.it/@chazz505/permutation-check

arrayOne = [ 1, 2, 4];
arrayTwo = [ 1, 2, 3, 4];

function solution(A) {

	let N = A.length;
	//similar to the math found in persmission-missin-element test, in this case it is used subtract down existing values from the array input to determine if the array is a permutation (would returns 1) or if an integer from 1 to N (the max # of the input array) is missing (would return 0)
	let sum = (N * (N+1)) / 2;
	var tap = [];
	for (var i in A) {
		//subtract the index from the sum variable until no indexes from the input array are left
		sum-=A[i];
		// console.log("two " + sum);
		//if the tap array and input array are on equivalent (i.e. empty) return 0. Theorizing that this prevents extreme or anti-sums from breaking this function.
		if(tap[A[i]]) {
			return 0;
		}
		//set the input array index inside the tap variable equal to true, which like above should theoretically preventing breaking with extreme arrays or anti-sums.
		tap[A[i]] = true;
		// console.log("tap " + tap);
	}
	// console.log("four " + sum);
	return +(sum==0);

}


console.log(solution(arrayOne));
console.log(solution(arrayTwo));