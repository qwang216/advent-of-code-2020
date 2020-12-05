const { getNumData } = require("../helper.js")

function getResult(inputData) {
  const targetNumber = 2020
  const nonFoundTriplet = "non found"

  if (inputData.length < 3) return nonFoundTriplet
  if (inputData.length < 4) {
    if (inputData[0] + inputData[1] + inputData[2] === targetNumber)
      return inputData[0] * inputData[1] * inputData[2]
    return nonFoundTriplet
  }

  let sortedData = inputData.sort((a, b) => a - b)
  for (let i = 0; i < sortedData.length - 2; i++) {
    let firstPointer = i + 1
    let secondPointer = sortedData.length - 1
    let result = sortedData[0]
    while (secondPointer > firstPointer) {
        result = sortedData[i] + sortedData[firstPointer] + sortedData[secondPointer]
        if (result > targetNumber) secondPointer--
        if (result < targetNumber) firstPointer++
        if (result === targetNumber) {
          return sortedData[i] * sortedData[firstPointer] * sortedData[secondPointer]
        }
    }
  }
  return nonFoundTriplet
}

console.log(getResult(getNumData("input.txt")))
