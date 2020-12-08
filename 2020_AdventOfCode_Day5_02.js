fs = require('fs')
let input = fs.readFileSync('/adventofcode/2020/day5/input.txt', 'utf8');
let inputArray = input.split("\r\n"); 

console.log(inputArray);
let rowLow = 0;
let rowHigh = 127;
let columnLow = 0;
let columnHigh = 7;

let row = 0;
let column = 0;
let seatID = 0;
let highestSeatID = 0;
let seatIDArray = new Array;


function splitRow(half,index){
	row = (rowHigh - rowLow)/2;
	
	
	if(half[index] == 'F'){
		rowHigh = rowHigh - Math.ceil(row);	
		row = rowHigh;
	}else if(half[index] == 'B'){
		rowLow = rowLow + Math.ceil(row);
		row = rowLow;
	}
}

function splitColumn(half, index){
	column = (columnHigh - columnLow)/2;
	
	if(half[index] == 'R'){
		columnLow = columnLow + Math.ceil(column);	
		column = columnLow;
	}else if(half[index] == 'L'){
		columnHigh = columnHigh - Math.ceil(column);
		column = columnHigh;
	}
	
}


for(let i=0; i<inputArray.length; i++){
	rowHigh = 127;
	rowLow = 0;
	row = 0;
	columnLow = 0;
	columnHigh = 7;
	column = 0;
	
	for(let j=0; j < 7; j++){
		splitRow(inputArray[i],j);
		//console.log("rowLow= " + rowLow + " rowHigh= " + rowHigh + " Final= " + row);
	}
	for(j=7; j < 10; j++){
		splitColumn(inputArray[i],j);
		//console.log("columnLow= " + columnLow + " columnHigh= " + columnHigh + " Final= " + column);	
	}
	

//Getting seatID = ROW * 8 + COLUMN 
seatID = row * 8 + column
seatIDArray.push(seatID);
}

seatIDArray.sort(function(a, b){return a - b});
let myseat = 0;
for(let i=0; i<seatIDArray.length - 1; i++){
	if((Number(seatIDArray[i+1]) - Number(seatIDArray[i])) > 1)
		myseat = Number(seatIDArray[i]) + 1;
	
}
	console.log("My seat is... " + myseat);

//539

