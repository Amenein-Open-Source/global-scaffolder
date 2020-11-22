const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});

function processi(filepath, template, path) {
  var payload = {};
  let stream = fs.createReadStream(filepath);

  let rl = readline.createInterface({
    input: stream,
  });

  rl.on("line", (line) => {
    var stringCollection = line.split("=>");
    payload[stringCollection[0].trim()] = line.split("=>")[1].trim();
  })
    .on("close", () => {
      scaffold(payload, template, path);
    })
    .on("error", (err) => {
      reject(err);
    });
}

const scaffold = (payload, template, path) => {
  fs.readFile(process.cwd() + "/templates/" + template, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    }
    var ata2 = data;
    for (const [key, value] of Object.entries(payload)) {
      var reg1 = new RegExp("<==" + key + "==>", "g");
      ata2 = ata2.replace(reg1, value);
      var reg2 = new RegExp("[.]+" + "<==" + key + "==>", "g");
      ata2 = ata2.replace(reg2, value);
    }
    /*
      var ata2 = data.replace(/[\.]+<==class==>/g, "." + name);
      ata2 = ata2.replace(/<==class==>/g, name);

      ata2 = ata2.replace(/[\.]+<==state1==>/g, "." + state1);
      ata2 = ata2.replace(/<==state1==>/g, state1);
      ata2 = ata2.replace(/[\.]+<==state2==>/g, "." + state2);
      ata2 = ata2.replace(/<==state2==>/g, state2);
      */
    if (!fs.existsSync(path.replace("scaffolds", "result"))) {
      fs.mkdirSync(
        path.replace("scaffolds", "result"),
        { recursive: true },
        (err) => {
          if (err) {
            return console.error(err);
          }
        }
      );
    }
    fs.appendFile(
      path.replace("scaffolds", "result") +
        "/" +
        payload["filename"] +
        payload["fileformat"],
      ata2,
      function (err2) {
        if (err2) throw err2;
        console.log("Saved!");
      }
    );
    /*
     */
  });
};

module.exports.processi = processi;
