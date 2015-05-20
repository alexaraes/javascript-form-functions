//5.5 + 7 --> 12.5
//-3 + 0 --> -3
//-7 + 10 --> 3
function add(a,b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a + b;
}

function subtract(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a - b;
}

function tax(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a*(b/100);
}

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

function stringRepeat(s, n) {
	n = parseFloat(n);
	return Array((n)+1).join(s);
}

function join(values, separator) {
	values = values.join(' '+separator+' ');
	return values;
}