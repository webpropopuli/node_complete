// notes.js

module.exports.dumpLoadInfo = () => {
	console.log(`>>Loaded ${module.filename}`); 
};

module.exports.addNums = (x, y) => {
	return x + y;
};