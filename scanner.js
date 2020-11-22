var fs = require("fs");
var scaffolds = fs.readdirSync(process.cwd() + "/scaffolds/");
var templates = fs.readdirSync(process.cwd() + "/templates/");
const scaffolder = require("./scaffolder");

(async function () {
    templates.forEach(async (file) => {
        if (file.includes("ast")) {
            var values = file.replace('.ast', '')
            scaffolds.forEach(async (file2) =>{
                if(file2.includes(".asv") && file2.includes(values)){
                    try {
                        const result = await scaffolder.processi(file2, file);
                        console.log(result);
                    } catch (e) {
                        console.error(e);
                    }
                }
            })
        }
    });
})();
