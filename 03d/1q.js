const { getData } = require("../helper.js")

function getResult(inputData) {
  const grid = parseDataToMatrix(inputData)
  let treeCount = 0

  if (grid.length < 1 || grid[0].length < 1) return treeCount

  let rowIndex = 0
  let colIndex = 0
  const deltaRow = 1
  const deltaCol = 3

  for (let i = 0; i < grid.length; i++) {
    if (rowIndex > grid.length - 1 || colIndex > grid[0].length - 1) break // reset deltaCol?
    rowIndex += deltaRow
    colIndex += deltaCol
    if (grid[rowIndex][colIndex] == "#") treeCount++
  }
  return treeCount
}

function parseDataToMatrix(data) {
  return //[[]]
}
console.log(getResult(getData("input.txt")))
