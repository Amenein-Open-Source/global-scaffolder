const fs = require("fs");
const readline = require("readline");

async function processi(filename, template) {
  var payload = {};
  return new Promise((resolve, reject) => {
    let stream = fs.createReadStream(process.cwd() + "/scaffolds/" + filename);

    let rl = readline.createInterface({
      input: stream,
    });

    rl.on("line", (line) => {
      var stringCollection = line.split("=>");
      console.log(line);
      payload[stringCollection[0].trim()] = line.split("=>")[1].trim();
    })
      .on("close", () => {
        scaffold(payload, template);
        rl.close();
        resolve("finished");
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});

const scaffold = (payload, template) => {
  fs.readFile(
    process.cwd() + "/templates/" + template,
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
      }
      var ata2 = data;
      console.log(ata2);
      console.log(payload);
      for (const [key, value] of Object.entries(payload)) {
          var reg1 = new RegExp("<==" + key + "==>", "g");
          ata2 = ata2.replace(reg1, value);
          var reg2 = new RegExp("[\.]+" + "<==" + key + "==>", "g");
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
      fs.appendFile(process.cwd() + "/target/" + payload["filename"] + payload["fileformat"], ata2, function (err) {
        if (err) throw err;
        console.log("Saved!");
        rl.close();
      });
    }
  );
};

module.exports.processi = processi;