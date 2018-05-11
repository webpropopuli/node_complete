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

//																					ADD NOTE
var addNote = (title, body) => {
	var note = {
		title,
		body 
		};

	var notes = readNotesFromFile();		// read any existing notes; no err handler needed

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
		console.log(":-( Duplicate title; not added");
		return [];
	}
};
//																					DELETE NOTE
var delNote = (title) => {
	var isDeleted = false;
	var notes = readNotesFromFile();		// read any existing notes; no err handler needed
	//filter
	var filtNotes = 	notes.filter( (note) => {
		if( title === note.title) 
		{
			isDeleted = true;							// if match, DON'T add to new array
			return false;
		}
		else
			return true;
	});
	

	if(isDeleted)		// rc 0 = something was deleted
	{
		writeNotesToFile(filtNotes);
		return 0;
	}
	else					// nothing to do
		return -1;
};

//																					SHOW ALL NOTES
var getAll = () => {
	return readNotesFromFile();			// read any existing notes
};

//																					FIND ONE NOTE from Title
var getNote = (title) =>  {
	var notes = readNotesFromFile();		// read any existing notes; no err handler needed
	var note = notes.filter( (note) => title === note.title);
	return note[0];
};


module.exports = { 
	addNote,
	delNote,
	getNote,
	getAll 
};