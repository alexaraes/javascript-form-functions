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