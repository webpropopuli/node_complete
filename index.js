console.clear();
// 3rd party stuff
const fs = require ('fs');		//file systemLanguage
const os = require ('os');
const _ = require ('lodash');


// my files
const notes = require('./notes.js');

notes.dumpLoadInfo();

console.log(notes.addNums(45, 95));


var user = os.userInfo();
fs.appendFile('notes.log', `Starting notes app for ${user.username}\n`,
				function(err){});



console.log(`Here we go ${user.username}`);
