// notes.js

var addNote = (title, body) => {
	console.log(">Adding note", title, body);
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