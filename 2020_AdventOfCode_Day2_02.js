
//File input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/day2/input.txt', 'utf8');
let inputArray = input.split("\r\n");  


let totalValid = 0;  // No reset

let min;
let max;
let letterCheck;
let testPWD;
let testPWDArray;



function inputbreakdown(str) {
	//Split input[i] into a min/max, lettercheck and password
	let evalArray = str.split(" ");
	
	minMax = evalArray[0].split("-");
	min = minMax[0]; 
	max = minMax[1];
	
	letterCheck = evalArray[1].split(":");

	
	testPWDArray = evalArray[2].split("\r\n");

	
	
}




for(i=0; i<inputArray.length; i++){
	
	inputbreakdown(inputArray[i]);

	testPWD = testPWDArray[0];

	let checkOne;
	let checkTwo;
	
	//min now equals first position  /  max equals second position to check....

	
	//Check 1 
	if(testPWD[Number(min)-1] == letterCheck[0])
		checkOne = true;
	else
		checkOne = false;
	
	//Check 2
	if(testPWD[Number(max)-1] == letterCheck[0])
		checkTwo = true;
	else
		checkTwo = false;
	
	
	
	//Compare Check 1 and Check 2
	// Check 1 = false , Check 2 = false =  INVALID
	// Check 1 = true , Check 2 = false =  VALID
	// Check 1 = false , Check 2 = true =  VALID
	// Check 1 = true , Check 2 = true =  INVALID
	
	if((checkOne == true && checkTwo == false) || (checkOne == false && checkTwo == true)){
		totalValid++;
	}
}

console.log("How many passwords are valid according to their policies? " + totalValid); 