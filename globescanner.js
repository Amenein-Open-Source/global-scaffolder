// can be used for a huge nested templating system
const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push({
        filename: path.join(__dirname, dirPath, file),
        path: path.join(__dirname, dirPath),
      });
    }
  });

  return arrayOfFiles;
};

module.exports.getAllFiles = getAllFiles;
