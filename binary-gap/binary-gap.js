//https://repl.it/@chazz505/Binary-Gaps

let number = 85;
totalZeros = 0;

function binaryGap(num)
{
	let currentZeroGap = 0,
		largestZeroGap = 0;
	//this converts the number (number) to binary
	binaryRepresentation = (num).toString(2);
	//this loops over the binary representation of the number
	for (let position = 0; position < binaryRepresentation.length; position++)
	{   //if the current binary digit is 0 then add 1 to the listed variables (currentZeroGap & totalZeros)
		if (binaryRepresentation.charAt(position) == '0')
		{
			currentZeroGap += 1;
			totalZeros += 1;
		} //otherwise (that is the current binary digit is 1) then see if the variable currentZeroGap is greater than the largestZeroGap and if it is then set largestZeroGap equal to the currentZeroGap. Regardless of that reset currentZeroGap to 0.
		else
		{
			if (currentZeroGap > largestZeroGap)
				largestZeroGap = currentZeroGap;

			currentZeroGap = 0;
		}
	}

	console.log("Binary Representation of Number is: " + binaryRepresentation);
	console.log("Total Number of Zeros: " + totalZeros);
	//as a result of this function we will find out the highest number of consecutive zeros
	totalZeros = 0;
	return largestZeroGap;
}

console.log("The number being used: " + number);
//run the number (number) through the binaryGap function and return the result (largestZeroGap).
console.log("The largest gap of zeros: " + binaryGap(number));

let trickyBinary = 0b100010000;
console.log("The number being used: " + trickyBinary);
//run the number (number) through the binaryGap function and return the result (largestZeroGap).
//run the number (trickyBinary) through the binaryGap function and return the result (largestZeroGap).
console.log("The largest gap of zeros: " + binaryGap(trickyBinary));