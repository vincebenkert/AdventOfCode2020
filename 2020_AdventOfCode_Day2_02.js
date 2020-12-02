
//File input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2020/day2/input.txt', 'utf8');
let inputArray = input.split("\r\n");  


let totalValid = 0;  // No reset
	 
let min; //min now equals first position to check
let max; //max equals second position to check....
let letterCheck;
let testPWD;
let testPWDArray;



function inputBreakdown(str) {
	//Split input[i] into a min/max, lettercheck and password
	let evalArray = str.split(" ");
	
	minMax = evalArray[0].split("-");
	min = minMax[0]; 
	max = minMax[1];
	
	letterCheck = evalArray[1].split(":");
	
	testPWDArray = evalArray[2].split("\r\n");
	testPWD = testPWDArray[0];

}




for(i=0; i<inputArray.length; i++){
	
	//Break down the input to get positions / letter to verify / pwd
	inputBreakdown(inputArray[i]);

	
	let checkOne;
	let checkTwo;
	
	
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
