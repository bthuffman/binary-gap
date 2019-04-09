let numberJumps = 0;

function solution(X, Y, D) {
	numberJumps = Math.ceil((Y-X)/D);
// console.log(numberJumps);
	return numberJumps;
}
console.log(solution(5, 5555, .21));