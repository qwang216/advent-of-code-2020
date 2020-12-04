const { getNumData } = require("../helper.js")

function getResult(inputData) {
  let compNumbs = {}
  const targetNum = 2020
  for (let i = 0; i < inputData.length; i++) {
    if (inputData[i] > targetNum) {
      continue
    }
    let comp = targetNum - inputData[i]
    if (compNumbs[comp]) {
      return comp * inputData[i]
    } else {
      compNumbs[inputData[i]] = true
    }
  }
}

console.log(getResult(getNumData("input.txt")))
