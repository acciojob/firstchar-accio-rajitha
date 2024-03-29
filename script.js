function firstChar(text) {
  // your code here
	let trimmedtext = text.trim();
	return trimmedtext.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
