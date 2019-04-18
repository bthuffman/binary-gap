function solution(newArrayLength, array) {
	let index;
	let indexNewArray;
	let firstArrayLength = array.length;
	let minimumNumberInNewArray = 0;
	let maximumNumberInNewArray = 0;
	//create a new array called counters with N number of 0 value indexes
	let counters = new Array (newArrayLength);
	for(index = 0; index < newArrayLength; index++) counters[index] = 0;
	let NPlusOne = newArrayLength + 1;
//iterate over the indexes of the original array and then apply following logic
	for(index=0; index < firstArrayLength; index++){
		//allows iteration over the entire newArray up until the value of N
		if(array[index] < NPlusOne){
			//sets the indexNewArray to the original array's value at that original array's index minus one (if the value at index 2 is 3 the the indexNewArray becomes 3-1 = 2.
			indexNewArray = array[index] - 1;
			//if the new array's index is less than the minimum array index value in the new array  then set it equal to that minimum value.
			if (counters[indexNewArray] < minimumNumberInNewArray) counters[indexNewArray] = minimumNumberInNewArray;
			//add one to the targeted index value
			counters[indexNewArray]++;
			//insures that maximumNumberInNewArray is always = to the highest index value in the counters array if it is less than the index value else set the minimumNumberInNewArray = maximumNumberInNewArray (which effectively will insure the minimumNumber value is tracked in said that minimumNumberInNewArray value.
			if (maximumNumberInNewArray < counters[indexNewArray]) maximumNumberInNewArray = counters[indexNewArray];
		} else {
			minimumNumberInNewArray = maximumNumberInNewArray;
		}
	}

	for(index = 0; index < newArrayLength; index++){
		if (counters[index] < minimumNumberInNewArray) counters[index] = minimumNumberInNewArray;
	}

	return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));