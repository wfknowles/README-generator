const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {

        // If the 'dist' folder doesn't exist, create it...
        if (!fs.existsSync('./dist')) {
            fs.mkdirSync('./dist');
        }

        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;