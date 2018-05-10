const fs = require('fs');


var origNote = {
	title: 'A Title',
	body: 'Here is my body text'
};

// Object --> string
var origNoteStr = JSON.stringify(origNote);

fs.writeFileSync('notes.json', origNoteStr);

var readNoteStr = fs.readFileSync('notes.json');

var readNote = JSON.parse(readNoteStr);

// this makes decisions for stringify
function replacer(key, value) {
	//if 		(key == 'title') 	return value;
	return value;
	}

readNoteStr = JSON.stringify(readNote, replacer)


console.log("-->", readNoteStr);
