

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//earliest frog can jump once = # seconds each leaf takes to fall into place * # array elements in length of the river
//Source https://www.youtube.com/watch?v=B4pgtRflo0E
//A =  Array
//X = Lenth of River (based on required leaves for jumping)
//need to record at which second the frog can jump
function solution (X, A) {
	//set as an object to keep track if have gotten a number yet. Nice because at each step can ask if have a had certain value yet and if not continue? This as opposed to an array where would look through each value to see if there rather than just the current index... It's like a hash table. Allows for constant time regardless of size of the object.
	let leaves = {};

	let steps = X;
	//left of reduce: creates an array of an object with numbers 0 through X.
	//reduce and on: adds up the values of the array within that object.
	let readyToJump = [...Array(X+1).keys()].reduce((a,b) => a +b )
	//build object as big as steps (X)
	for (let i = 0; i < X; i++) {
		//this portion allows for us to iterate through the object (which represents the distance to the other side of the river) until steps = 0 (i.e. gone all the way through the object or in this case until a leaf has fallen on every index [distance point] on the river for the frog to jump safely across)
		leaves[steps] = false;
		//decrement steps
		steps --;
	}
	//linear step, running through the array
	for (let i = 0; i < A.length; i++) {
		//sees if the current index's value is equal to false which only happens if said value is in the leaves[steps] object. Then if it's true that it is equal to false (that the value is in the object) then it will set it equal to true and decrement readyToJump by the value at that index unless that value at said index has already been set to true at which case it moves to the next if statement. That is if the current index's value is not equal to false then proceed to the next if block.
		if (leaves[A[i]] === false) {
			leaves[A[i]] = true;
			readyToJump -= A[i];
		}
		//if readyToJump is equal to 0 then return the index (i.e. equivalent to the number of times it took to )
		if (readyToJump === 0) {
			return i;
		} else {

		}
	}
	return -1;
}


// console.log(solution(4, [3,2,3,1,55,2,4]));

