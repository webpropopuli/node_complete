const fs = require('fs');

var origNote = {
	title: 'A Title',
	body: 'Here is my body text'
};

var origJNote = JSON.stringify(origNote);

fs.writeFileSync('notes.json', origJNote);

var readJNote = fs.readFileSync('notes.json');

var readNote = JSON.parse(readJNote);

console.log("from file", readJNote.title);
