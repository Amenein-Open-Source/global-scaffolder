var fs = require("fs");
const scaffolder = require("./scaffolder");
const globescanner = require("./globescanner");
var templates = fs.readdirSync(process.cwd() + "/templates/");

(function () {
  var scaffolds = globescanner.getAllFiles("./scaffolds");
  scaffolds = scaffolds.reverse();
  templates = templates.reverse();
  templates.forEach((file) => {
    if (file.includes("ast")) {
      var values = file.replace(".ast", "");
      scaffolds.forEach((file2) => {
        if (
          file2.filename.includes(".asv") &&
          file2.filename.includes(values)
        ) {
          console.log(file2);
          console.log(file);
          try {
            scaffolder.processi(file2.filename, file, file2.path);
          } catch (e) {
            console.error(e);
          }
        }
      });
    }
  });
})();
