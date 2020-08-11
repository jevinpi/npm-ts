var fs = require('fs');
const path = require('path');
const fse = require('fs-extra');


const targetFile = path.resolve(__dirname, '../@ascs');
// const originalFile = path.resolve(__dirname, '../../packages');

fs.access(targetFile, fs.constants.F_OK, (err) => {
	console.log(`${targetFile} ${err ? 'not exist' : 'exist'}`);
	if (err) {
		fs.mkdirSync(targetFile);
		// fse.copySync(originalFile, targetFile + '/packages');
	} else {
		// console.log(targetFile, originalFile);
		// fse.copySync(originalFile, targetFile + '/packages');
	}
});