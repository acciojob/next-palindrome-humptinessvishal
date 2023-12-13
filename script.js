function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function nextPalindrome(num) {
  //your JS code here.
	const inputNumber = parseInt(num);
	if (!isNaN(inputNumber) && inputNumber > 0) {
		let nextNum = inputNumber + 1;
		while (!isPalindrome(nextNum)) {
			nextNum++;
		}
		return nextNum;
	} else {
		alert("Please enter a valid positive integer.");
	}
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
