const { getData } = require("../helper.js")

function getResult(inputDataArr) {
    let maxSeatID = -Infinity
    for (let i = 0; i < inputDataArr.length; i++) {
        let currSeatID = calculateSeatID(inputDataArr[i])
        // print(currSeatID)
        if (currSeatID > maxSeatID) maxSeatID = currSeatID
    }
    return maxSeatID
}

let startingRangeFB = { min: 0,
    max: 127 }
let startingRangeLR = { min: 0,
    max: 7 }
let lastFBPartition = "F"
let lastLRPartition = "L"
// BFFFBBFRRR
function calculateSeatID(boardingPass) {
    let partitions = boardingPass.split("")
    lastFBPartition = partitions[6]
    lastLRPartition = partitions[partitions.length - 1]
    for (let i = 0; i < partitions.length; i++) {
        const partition = partitions[i]
        calculatePartitionRange(partition)
    }
    let row = lastFBPartition === "F" ? startingRangeFB.min : startingRangeFB.max
    let col = lastLRPartition === "L" ? startingRangeLR.min : startingRangeLR.max
    return (row * 8) + col
}

function calculatePartitionRange(partition) {
    if (partition === "F") {
        const minPt = startingRangeFB.min
        const maxPt = (startingRangeFB.max - startingRangeFB.min) / 2
        startingRangeFB.min = minPt
        startingRangeFB.max = Math.floor(maxPt)
    } else if (partition === "L") {
        const minPt = startingRangeLR.min
        const maxPt = (startingRangeLR.max - startingRangeLR.min) / 2 
        startingRangeLR.min = minPt
        startingRangeLR.max = Math.floor(maxPt)
    } else if (partition === "B" ) {
        const minPt = (startingRangeFB.max + startingRangeFB.min) / 2
        const maxPt = startingRangeFB.max
        startingRangeFB.min = Math.ceil(minPt)
        startingRangeFB.max = maxPt
    } else if (partition === "R") {
        const minPt = (startingRangeLR.max + startingRangeLR.min) / 2
        const maxPt = startingRangeLR.max
        startingRangeLR.min = Math.ceil(minPt)
        startingRangeLR.max = maxPt
    }
}

function print(data) {
    console.log(data)
}
console.log(getResult(["BFFFBBFRRR"]))

// console.log(getResult(getData("input.txt")))