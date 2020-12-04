const { getData } = require("../helper.js")

function getResult(inputData) {
    const grid = parseDataToMatrix(inputData)
    if (grid.length < 1 || grid[0].length < 1) return 0

    let treeCount = 0
    let rowIndex = 0
    let colIndex = 0
    const deltaRow = 1
    const deltaCol = 3
    const col = grid[0].length
    while (rowIndex < grid.length) {
        if (grid[rowIndex][colIndex] === "#") treeCount++
        colIndex = (colIndex + deltaCol) % col
        rowIndex += deltaRow
    }
    return treeCount
}

function parseDataToMatrix(data) {
    var matrix = []
    for (let i = 0; i < data.length; i++) {
        let array = data[i].split("")
        matrix.push(array)
    }
    return matrix
}
console.log(getResult(getData("input.txt")))
