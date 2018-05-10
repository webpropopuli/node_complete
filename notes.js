// notes.js

const fs = require('fs');
var dataFile = "./notes_data.json";

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
		};

// read any existing notes
	try {																				//try handles no file found which is true first run
		var allNotes = fsReadFileSync(dataFile);
		notes = JSON.parse(allNotes);
	} catch(er) {}																	// no err handler needed
	
	notes.push(note);						// APPEND new note to array
	
	fs.writeFileSync(dataFile, JSON.stringify(notes));
};

var delNote = (title) => {
	console.log(">Deleting note", title);
};

var getAll = () => {
	console.log(">Listing all notes");
};

var getNote = (title) => {
	console.log(">getting a note");
};


module.exports = { 
	addNote,
	delNote,
	getNote,
	getAll 
};