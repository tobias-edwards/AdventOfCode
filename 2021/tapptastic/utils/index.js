const fs = require("fs");

function getInput(filePath='input.txt') {
  return fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .filter(data => data)
}

module.exports = {
    getInput,
}
