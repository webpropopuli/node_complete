console.clear();

// 3rd party stuff
const fs = require ('fs');		//file systemLanguage
const os = require ('os');
const _ = require ('lodash');
const yargs = require ('yargs');

// my files
const notes = require('./notes.js');

console.log(`App started ->`);

const args = yargs.argv;			// YARGS

console.log('args: ', args._[0]);
var userCommand = _.upperCase(args._[0]);


//userCommand = userCommand.toUpperCase();
if(userCommand == "ADD")
	notes.addNote(args.title, args.body);
else if (userCommand == "GET")
	notes.getNote(args.title);
else if (userCommand == "DEL")
	notes.delNote(args.title, args.body);
else if (userCommand == "LIST")
	notes.getAll();
else
	console.log(`Unknown cmd [${userCommand}]\n`);


var user = os.userInfo();
fs.appendFile('notes.log', `Starting notes app for ${user.username}\n`,
				function(err){});


