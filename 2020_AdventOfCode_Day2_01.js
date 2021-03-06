
//File input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2020/day2/input.txt', 'utf8');
let inputArray = input.split("\r\n");  


let totalValid = 0;  // No reset
let occurrence = 0;  //Reset each time...

let min;  // Minmium value of letterCheck
let max;	// Max value of letterCheck
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
	
	inputBreakdown(inputArray[i]);

	
	//Evaluate by char[] in string, count occurrences where lettercheck equal char[i];
	for(x=0; x<testPWD.length; x++){

		if(letterCheck[0] === testPWD[x]){
			occurrence++;
		}
	}
	
	//Check password to see if pass/fail
	//Keep running total of valid Passwords
	if(Number(min) <= occurrence && occurrence <= Number(max)){
		totalValid++;
		//console.log("Check.. " + occurrence + " is between " + min + " and " + max);
	}
	occurrence = 0;
}

console.log("How many passwords are valid according to their policies? " + totalValid); 
