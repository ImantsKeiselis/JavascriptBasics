let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run.|sun.|fun.|pun.|nun.|bun./; // Change this line
let result = unRegex.test(exampleStr);