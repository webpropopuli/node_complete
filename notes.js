// notes.js

const fs2 = require('fs');
var dataFile = 'notes-data.json';

var readNotesFromFile = () => {
	try {																				//try handles no file found which is true first run
		var allNotes = fs2.readFileSync(dataFile);
		return ( JSON.parse(allNotes) );
	} catch(er) {
		console.log("fsRead fail", er); 
		return [];		// empty rr is acceptble here (sort of)
		};	
};

var writeNotesToFile = (notes) => {
	fs2.writeFileSync(dataFile, JSON.stringify(notes));
};


var addNote = (title, body) => {
	//var notes = [];
	var note = {
		title,
		body 
		};

// read any existing notes
	var notes = readNotesFromFile();																// no err handler needed

	// make decisions based on existing notes
	var isUnique = true;
	notes.filter( (note) => {
		if (title === note.title)
			isUnique = false;
	});
	
	if(isUnique) {
		notes.push(note);	// APPEND new note to array
		writeNotesToFile(notes);
		return note;
	}
	else {
		console.log("Duplicate title; not added");
		return [];
	}
};

var delNote = (title) => {
	console.log(">Deleting note", title);
};

var getAll = () => {
	console.log(">Listing all notes");
	// read any existing notes
	var notes = readNotesFromFile();
};

var getNote = (title) => {
	console.log(">getting a note");
	// read any existing notes
	var notes = readNotesFromFile();
};


module.exports = { 
	addNote,
	delNote,
	getNote,
	getAll 
};