var fs = require("fs")

module.exports = {
  getData: function (input) {
    return fs.readFileSync(input, "utf8").split("\n")
  },
  getNumData: function (input) {
    return fs.readFileSync(input, "utf8").split("\n").map(Number)
  },
}
