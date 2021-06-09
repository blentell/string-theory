function xify(str) {
	let outputStr = "";
	for (const character of str) {
		outputStr += "x";
	}

	return outputStr;
}

console.log(xify("hello"));

function yellingChars(exclamation) {
	let outputStr = "";
	for (const character of exclamation) {
		outputStr += character + "!";
	}
	return outputStr;
}

console.log(yellingChars("goodness"));

function indexedChars(index) {
	let outputStr = "";
	let count = 0;
	for (const character of index) {
		outputStr += count + character;
		count++;
	}
	return outputStr;
}

console.log(indexedChars("hello"));

function numberedChars(index) {
	let outputStr = "";
	let count = 1;
	for (const character of index) {
		outputStr += `(${count})` + character;
		count++;
	}
	return outputStr;
}

console.log(numberedChars("hello"));

function exclaim(exclamation) {
	let outputStr = "";
	let punctuation = [".", "?", ","];
	for (const character of exclamation) {
		if (!punctuation.includes(character)) {
			outputStr += character;
			console.log(outputStr);
		}
		if (punctuation.includes(character)) {
			outputStr += "!";
		}
	}
	return outputStr;
}

console.log(exclaim("What are you doing? Are you a fool?"));

function repeatIt(str, n) {
	let output = "";
	output += str.repeat(n);
	return output;
}

console.log(repeatIt("beetlejuice", 3));

function truncate(shorten) {
	let output = "";
	output += shorten.substring(0, 15) + "...";
	return output;
}

console.log(
	truncate("The fault, dear Brutus, is not in our stars, but in ourselves.")
);

function ciEmailify(addOn) {
	let output = "";
	output += addOn.replace(" ", ".") + "@codeimmersives.com";
	return output;
}

console.log(ciEmailify("colin jaffe"));

function reverse(str) {
	let output = str.split("");
	let output2 = output.reverse();
	let output3 = output2.join("");
	return output3;
}

console.log(reverse("colin"));

function onlyVowels(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	let output = "";
	for (const character of str) {
		if (vowels.includes(character)) {
			output += character;
		}
	}
	return output;
}
console.log(onlyVowels("Colin Jaffe"));

function crazyCase(str) {
	let output = "";
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 1) {
			output += str.charAt(i).toUpperCase();
		} else {
			output += str.charAt(i);
		}
	}
	return output;
}

console.log(crazyCase("multiple words here"));

function titleCase(str) {
	const output = str.split(" ");

	for (let i = 0; i < output.length; i++) {
		output[i] = output[i].charAt(0).toUpperCase() + output[i].substring(1);
	}

	return output.join(" ");
}

console.log(titleCase("multiple words here"));

function camelCase(str) {
	const output = str.split(" ");

	for (let i = 0; i < output.length; i++) {
		output[i] = output[i].charAt(0).toUpperCase() + output[i].substring(1);
	}

	return output.join("");
}

console.log(camelCase("well yeah of course"));

function crazyCase2ReturnOfCrazyCase(str) {
	let output = "";
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 1 && str.charAt(i) !== " ") {
			output += str.charAt(i).toUpperCase();
		} else {
			output += str.charAt(i);
		}
	}
	return output;
}

console.log(crazyCase2ReturnOfCrazyCase("multiple words here"));
