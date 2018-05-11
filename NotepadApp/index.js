console.clear();

// 3rd party stuff
const fs = require ('fs');		//file systemLanguage
const os = require ('os');
const _ = require ('lodash');
const yargs = require ('yargs');

// my files
const notes = require('./notes.js');

console.log(`** DavidNotes running... **`);

var optsTitleRequired = {
			describe: 'Title of Note',
			demand: true,
			alias: 't'
		};
		
var optsBodyRequired = {
			describe: 'Details',
			demand: true,
			alias: 'b'
		};
		
// YARGS handles input like "app --x=y" and creates {x:y}
const args = yargs
	.command('add', '(-a) Add a new note', {
		title: optsTitleRequired,
		body: optsBodyRequired
	})
	.command('get', '(-g) Show a note by title', {
		title: optsTitleRequired
	})	
	.command('del', '(-d) Delete a note by title', {
		title: optsTitleRequired,
	})
	.command('list', '(-l) List all notes')
	.help()
	.argv;

console.log('args: ', args._[0]);
var userCommand = _.upperCase(args._[0]);

if(userCommand == "ADD")
{
	var note = notes.addNote(args.title, args.body);
	if (undefined == note)
		console.log("No note added.");
	else {
		console.log(`-->Title: ${note.title} Note: ${note.body}`);
	}
}
else if (userCommand == "GET")		// get one
{
	var note = notes.getNote(args.title);
	if (undefined == note)
		console.log(`;-( [${args.title}] not found`);
	else {
		console.log(`-->Title: ${note.title} Note: ${note.body}`);
	}
}
else if (userCommand == "DEL")
{
	var rc = notes.delNote(args.title);
	if(0 == rc)
		console.log(`Note [${args.title}] deleted`);
	else
		console.log(`Note [${args.title}] NOT deleted`);
}
else if (userCommand == "LIST")		//get all
{	
	allNotes = notes.getAll();
	console.log(`-->Found ${allNotes.length} note(s)`);
	allNotes.forEach( (n) => {
		console.log(`-->Title: ${n.title} Note: ${n.body}`); 
	});
}
else
	console.log(`Unknown cmd [${userCommand}]\n`);


var user = os.userInfo();
fs.appendFile('notes.log', `Starting notes app for ${user.username}\n`,
				function(err){});


