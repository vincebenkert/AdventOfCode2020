fs = require('fs')
let input = fs.readFileSync('/adventofcode/2020/day3/input.txt', 'utf8');
let inputArray = input.split("\r\n"); 

//console.log(inputArray);
let currentX = 0;
let treeCountR3D1 = 0;
let treeCountR1D1 = 0;
let treeCountR5D1 = 0;
let treeCountR7D1 = 0;
let treeCountR1D2 = 0;
let result = 0;

//To go through each level...
//right 3, down 1
for(let i=0;  i<inputArray.length-1; i++){
	//The value of i represents the current row I am on...
	if(inputArray[i+1].charAt(currentX+3) == "#"){
		//console.log("Hit a tree on row... " + (i+2));
		treeCountR3D1++;
	}
	currentX = currentX + 3;
	//console.log("CurrentX = " + currentX);	
	if(currentX > 27)
		currentX = currentX - 31;
	
}
//R1 D1...
currentX = 0;
for(let i=0;  i<inputArray.length-1; i++){
	//The value of i represents the current row I am on...
	if(inputArray[i+1].charAt(currentX+1) == "#"){
		//console.log("Hit a tree on row... " + (i+2));
		treeCountR1D1++;
	}
	currentX = currentX + 1;
	//console.log("CurrentX = " + currentX);	
	if(currentX > 29)
		currentX = currentX - 31;
	
}

currentX = 0;
//R5D1
for(let i=0;  i<inputArray.length-1; i++){
	//The value of i represents the current row I am on...
	if(inputArray[i+1].charAt(currentX+5) == "#"){
		//console.log("Hit a tree on row... " + (i+2));
		treeCountR5D1++;
	}
	currentX = currentX + 5;
	//console.log("CurrentX = " + currentX);	
	if(currentX > 25)
		currentX = currentX - 31;
	
}

currentX = 0;
//R7D1
for(let i=0;  i<inputArray.length-1; i++){
	//The value of i represents the current row I am on...
	if(inputArray[i+1].charAt(currentX+7) == "#"){
		//console.log("Hit a tree on row... " + (i+2));
		treeCountR7D1++;
	}
	currentX = currentX + 7;
	//console.log("CurrentX = " + currentX);	
	if(currentX > 23)
		currentX = currentX - 31;
	
}

currentX = 0;
//R1D2
for(let i=0;  i<inputArray.length-1; i=i+2){
	//The value of i represents the current row I am on...
	if(inputArray[i+2].charAt(currentX+1) == "#"){
		console.log("Hit a tree on row... " + (i+3));
		treeCountR1D2++;
	}
	currentX = currentX + 1;
	console.log("CurrentX = " + currentX);	
	if(currentX > 29)
		currentX = currentX - 31;
	
}



result = treeCountR3D1 * treeCountR1D1 * treeCountR5D1 * treeCountR7D1 * treeCountR1D2;
console.log("What do you get if you multiply together the number of trees encountered on each of the listed slopes? " + result);

