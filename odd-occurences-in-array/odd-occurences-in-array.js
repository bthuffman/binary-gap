//A working solution, not a huge fan of the nextIsDifferent function because seems a bit unclear to me. Perhaps another path forward like the one on this link is feasible. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_every3
arrayOne = [9, 3, 9, 3, 9, 7, 9, 9];

function solution (A) {

//sorts through an array of integers and returns the value of the array that satisfies the first code in the function solution
	return A.sort().find(nextIsDifferent);

//returns integers which have no adjacent integer with the same value, thus giving all unique numbers.
	function nextIsDifferent (el, index, A) {
		return ((index + 1) % 2 === 1 && el !== A[index + 1]);
	}
}

console.log(solution(arrayOne));