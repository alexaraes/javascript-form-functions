///////FUNCTION ADD
function add(a,b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a + b;
}

///////FUNCTION SUBTRACT
function subtract(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a - b;
}

///////FUNCTION TAX
function tax(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a*(b/100);
}

///////FUNCTION STRINGLENGTH
function stringLength(inputString) {
	if(inputString.length < 5) {
		return 'short string';
	}
	else if(inputString.length > 5 && inputString.length < 10) {
		return 'medium string';
	}
	else if (inputString.length > 10) {
		return 'long string';
	}
}

///////FUNCTION STARTSWITH
function startsWith(inputString) {
	if(inputString.charAt(0) === 'a' || inputString.charAt(0) === 'A') {
		return 'starts with A';
	} 
	else if(inputString.charAt(0) === 'b' || inputString.charAt(0) === 'B') {
		return 'starts with B';
	} 
	else if(inputString.charAt(0) === 'c' || inputString.charAt(0) === 'C') {
		return 'starts with C';
	} 
	else if(inputString.charAt(0) === 'd' || inputString.charAt(0) === 'D') {
		return 'starts with D';
	} 
	else if(inputString.charAt(0) === 'e' || inputString.charAt(0) === 'E') {
		return 'starts with E';
	} 
	else {
		return 'starts with something else';
	} 
}

///////FUNCTION STRINGREPEAT
function stringRepeat(s, n) {
	n = parseFloat(n);
	return Array((n)+1).join(s);
}

///////FUNCTION NSUM
function nSum(inputString) {
	var input = parseInt(inputString);
	for (var i=0; i < input; i++) {
		var newTotal = i +input;
		var finalTotal = newTotal + input;
	}
	return finalTotal;
}

///////FUNCTION JOIN
function join(values, separator) {
	values = values.join(' '+separator+' ');
	return values;
}

///////FUNCTION COUNTLETTERS
function countLetters(inputString) {
	var letterCount = {};

	for (var i=0; i<inputString.length; i++) {

		var currentLetter = inputString.charAt(i);
		if(!letterCount.hasOwnProperty(currentLetter)) {
			letterCount[currentLetter]=1;
		}
		else {
			letterCount[currentLetter]++;
		}
	}
	var outputString = '';

	for (var propertyName in letterCount) {
		var value = letterCount[propertyName];

		outputString = outputString + propertyName + ':' + value + ',';
	}

	return outputString;
}








