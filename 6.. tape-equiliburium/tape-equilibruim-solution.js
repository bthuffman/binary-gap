//https://repl.it/@chazz505/Tape-Equiplibrium
//Final success thanks to https://gist.github.com/jeanlescure/797eef515cfa4a05830b
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

//by using reduce on the array sum the indexes of the array except for the first index which is set to zero (index must be > 0 to be added) and put summation in a variable (sumRight)
	let sumRight = A.reduce(function(previousValue, currentValue, index){ return (index > 0)? previousValue + currentValue : 0; }, 0);
//create a variable (sumLeft) set to 0 to hold the left side of the array being split and subtracted
	let sumLeft = 0;
	//create an array which will hold all the results of subtracting the sumRight and sumLeft variables.
	let substractions = [];
	//create variable that is one less the total length of the array
	let maxIndex = A.length - 1;
	//iterate through the array
	for(let i = 0; i < maxIndex; i++){
		//add the current index to the sumLeft variable
		sumLeft += A[i];
		//subtract the updated sumLeft variable from the sumRight and push the result to the substrations array
		substractions.push(Math.abs(sumLeft - sumRight));

		//if the current index plus one is less than or equal to the maxIndex variable then subtract the next index from the current index position from the sumRight variable
		if (i + 1 <= maxIndex) sumRight -= A[i + 1];
	}
//this last bit is a bit is similar to the sumRight variable. Essentially reduces to the lowest value. If the previous value is less than the current value use the previous value, else use the current value. 
	return substractions.reduce(function(previousValue,currentValue,index){ return (index > 0)? ((previousValue < currentValue)? previousValue : currentValue) : currentValue; }, 0);
}

// let arr = [3,1,2,4,3];

// console.log(solution(arr));

