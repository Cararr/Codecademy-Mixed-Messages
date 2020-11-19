const Messages = require('./messages.js');

console.log(
	`${Messages.firstPart[Math.floor(Math.random() * 5)]} ${
		Messages.secondPart[Math.floor(Math.random() * 5)]
	} ${Messages.thirdPart[Math.floor(Math.random() * 5)]}`
);
