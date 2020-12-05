const { getData } = require("../helper.js")

function getResult(inputDataArr) {
    let maxSeatID = -Infinity
    for (let i = 0; i < inputDataArr.length; i++) {
        const pass = inputDataArr[i]
        let currSeatID = calculateSeatID(pass)
        if (currSeatID > maxSeatID) maxSeatID = currSeatID
    }
    return maxSeatID
}

let startingRangeFB = { min: 0,
    max: 127 }
let startingRangeLR = { min: 0,
    max: 8 }

// BFFFBBFRRR
function calculateSeatID(boardingPass) {
    let partitions = boardingPass.split("")
    for (let i = 0; i < partitions.length; i++) {
        const partition = partitions[i]
        getPartitionRange(partition)
    }
    let row = Math.ceil(startingRangeFB.max)
    let col = Math.ceil(startingRangeLR.max)
    return (row * 8) + col
}

function getPartitionRange(partition) {
    if (partition === "F" || partition === "L") {
        const minPt = startingRangeFB.min
        const maxPt = (startingRangeFB.max - startingRangeFB.min) / 2
        startingRangeFB.min = minPt
        startingRangeFB.max = maxPt
    } else if (partition === "B" || partition === "R" ) {
        const minPt = (startingRangeLR.max - startingRangeLR.min) / 2
        const maxPt = startingRangeLR.max
        startingRangeLR.min = minPt
        startingRangeLR.max = maxPt
    }
}

function print(data) {
    console.log(data)
}
// console.log(calculateSeatID(["BFFFBBFRRR", "BFFFBBFRRR"]))

console.log(getResult(getData("input.txt")))