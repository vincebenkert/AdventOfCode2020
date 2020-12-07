fs = require('fs')
let input = fs.readFileSync('/adventofcode/2020/day4/input.txt', 'utf8');
let inputArray = input.split("\r\n\r\n"); 

const regexbyr = RegExp('byr:'); //byr (Birth Year)
const regexiyr = RegExp('iyr:'); //iyr (Issue Year)
const regexeyr = RegExp('eyr:'); //eyr (Expiration Year)
const regexhgt = RegExp('hgt:'); //hgt (Height)
const regexhcl = RegExp('hcl:'); //hcl (Hair Color)
const regexecl = RegExp('ecl:'); //ecl (Eye Color)
const regexpid = RegExp('pid:'); //pid (Passport ID)
const regexcid = RegExp('cid:'); //cid (Country ID) - Optional...


//console.log(inputArray);

let valid = 0;
let continueCheck = false;



function byr(string){
	// byr (Birth Year) - four digits; at least 1920 and at most 2002.
	let byrRegEx = /byr:(.[0-9]+)/;
	let result = byrRegEx.exec(string);
	//console.log("byr = " + result[1]);
	if(1920 <= Number(result[1]) && Number(result[1]) <= 2002)
		continueCheck = true;
	else
		continueCheck = false;
}

function iyr(string){
	// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
	let iyrRegEx = /iyr:(.[0-9]+)/;
	let result = iyrRegEx.exec(string);
	//console.log("iyr = " + result[1] );
	if(2010 <= Number(result[1]) && Number(result[1]) <= 2020)
		continueCheck = true;
	else
		continueCheck = false;
}

function eyr(string){
	//eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
	let eyrRegEx = /eyr:(.[0-9]+)/;
	let result = eyrRegEx.exec(string);
	
	if(2020 <= Number(result[1]) && Number(result[1]) <= 2030){
		continueCheck = true;
	}else
		continueCheck = false;
}

function hgt(string){
	//hgt (Height) - a number followed by either cm or in:
		//If cm, the number must be at least 150 and at most 193.
		//If in, the number must be at least 59 and at most 76.
	let hgtINRegEx = /hgt:(.[0-9]+)in/;
	let hgtCMRegEx = /hgt:(.[0-9]+)cm/;
	if(hgtINRegEx.test(string) == true){
		result = hgtINRegEx.exec(string);
		if(59 <= Number(result[1]) && Number(result[1]) <= 76)
			continueCheck = true;
		else
			continueCheck = false;	
	}else if(hgtCMRegEx.test(string) == true){
		result = hgtCMRegEx.exec(string);
		if(150 <= Number(result[1]) && Number(result[1]) <= 193)
			continueCheck = true;
		else
			continueCheck = false;	
	}
	else
		continueCheck = false;
	
	

}

function hcl(string){
	//hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
	let hclRegEx = /hcl:#[0-9a-f]{6,6}\b/;
	if(hclRegEx.test(string) == true)
		continueCheck = true;
	else 
		continueCheck = false;
}

function ecl(string){
	//ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.

	let eclRegEx = /ecl:(.[a-z]+)/;
	
	if (eclRegEx.test(string) == true){
		let result = eclRegEx.exec(string);
		
		if((result[1] == 'amb') || (result[1] == 'blu') || (result[1] == 'brn') || (result[1] == 'gry') || (result[1] == 'grn') || (result[1] == 'hzl') || (result[1] == 'oth'))
			continueCheck = true;
		else
			continueCheck = false;
	}else
		continueCheck = false;
	
}

function pid(string){
	//pid (Passport ID) - a nine-digit number, including leading zeroes.
	let pidRegEx = /pid:([0-9]){9,9}\b/;
		
	if(pidRegEx.test(string) == true){
		result = pidRegEx.exec(string);
		//console.log("pid: " + string);
		continueCheck = true;
	}else
		continueCheck = false;
}

function cid(string){
	//cid (Country ID) - ignored, missing or not.
}

// Each element in this array with be all values for the given "passport" check..
for(let i=0; i < inputArray.length; i++){
	//Remove the rogue \r\n and replace with a space...	
		inputArray[i] = inputArray[i].replace(/(\r\n|\n|\r)/gm, " "); 
}


for(i=0; i < inputArray.length; i++){
	if(regexbyr.test(inputArray[i])){
		byr(inputArray[i]);
		if(regexiyr.test(inputArray[i]) && continueCheck== true){
			iyr(inputArray[i]);
			if(regexeyr.test(inputArray[i]) && continueCheck== true){
				eyr(inputArray[i]);
				if(regexhgt.test(inputArray[i]) && continueCheck== true){
					hgt(inputArray[i]);
					if(regexhcl.test(inputArray[i]) && continueCheck== true){
						hcl(inputArray[i]);
						if(regexecl.test(inputArray[i]) && continueCheck== true){
							ecl(inputArray[i]);
							if(regexpid.test(inputArray[i]) && continueCheck == true){
								pid(inputArray[i]);
								if(continueCheck == true){
									
									valid++;
									console.log("Output value = " + valid + " " +inputArray[i]);
								}
							}
						}
					}
				}
			}
		}
	}else
		console.log("BAD -- " + inputArray[i]);
}


console.log("Total valid passports = " + valid);


// 125 is too low.........
//170 is too high.........
//169 is too high.........
//168 is too high.........








