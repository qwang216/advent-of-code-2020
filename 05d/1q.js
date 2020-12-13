const { getData } = require("../helper.js")

function getResult(inputDataArr) {
    let maxSeatID = -Infinity
    for (let i = 0; i < inputDataArr.length; i++) {
        let currSeatID = calculateSeatID(inputDataArr[i])
        if (currSeatID > maxSeatID) { 
            maxSeatID = currSeatID
        }
    }
    return maxSeatID
}
// BFFFBBFRRR
function calculateSeatID(boardingPass) {
    let startingRangeFB = { min: 0,
        max: 127 }
    let startingRangeLR = { min: 0,
        max: 7 }
    let lastFBPartition = "F"
    let lastLRPartition = "L"

    let partitions = boardingPass.split("")
    lastFBPartition = partitions[6]
    lastLRPartition = partitions[partitions.length - 2]
    for (let i = 0; i < partitions.length; i++) {
        const partition = partitions[i]
        calculatePartitionRange(partition, startingRangeFB, startingRangeLR)
    }
    let row = lastFBPartition === "F" ? startingRangeFB.min : startingRangeFB.max
    let col = lastLRPartition === "L" ? startingRangeLR.min : startingRangeLR.max
    return (row * 8) + col
}

function calculatePartitionRange(partition, startingRangeFB, startingRangeLR) {
    if (partition === "F") {
        const maxPt = (startingRangeFB.max + startingRangeFB.min) / 2
        startingRangeFB.max = Math.floor(maxPt)
    } else if (partition === "L") {
        const maxPt = (startingRangeLR.max + startingRangeLR.min) / 2 
        startingRangeLR.max = Math.floor(maxPt)
    } else if (partition === "B" ) {
        const minPt = (startingRangeFB.max + startingRangeFB.min) / 2
        startingRangeFB.min = Math.ceil(minPt)
    } else if (partition === "R") {
        const minPt = (startingRangeLR.max + startingRangeLR.min) / 2
        startingRangeLR.min = Math.ceil(minPt)
    }
}

exports.calculateSeatID = calculateSeatID

// console.log(getResult(["BBFFBBFRLL", "BBFFBBFRLL", "BFFFBBFRRR"]))

console.log(getResult(getData("input.txt")))