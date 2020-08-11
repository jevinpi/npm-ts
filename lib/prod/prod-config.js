var fs = require('fs');
const path = require('path');
const fse = require('fs-extra');


const targetFile = path.resolve(__dirname, '../@ascs');

fs.access(targetFile, fs.constants.F_OK, (err) => {
	console.log(`${targetFile} ${err ? 'not exist' : 'exist'}`);
	if (!err) {
		fse.emptyDir(targetFile, err => {
			if (err) return console.error(err);
			console.log('empty success!');
		})
	}
});