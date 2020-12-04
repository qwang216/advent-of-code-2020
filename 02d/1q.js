const { getData } = require("../helper.js")

function getResult(inputData) {

    // parse input data into array of array [[min, max, letter, pw]] or json array
    // 5-10 b: bhbjlkbbbbbbb
    // parameter = (min, max, letter, pw)
    // iterate through pw and count require-letter
    // return count >= min || count <= max

    const pws = parseData(inputData) // [[min, max, letter, pw]]
    let validPwCount = 0
    for (let i = 0; i < pws.length; i++) {
        const pw = pws[i]
        if (isValidPw(pw)) validPwCount ++
    }
    return validPwCount
}

// [min, max, letter, pw]
function isValidPw(dataArr) {
    const min = dataArr[0]
    const max = dataArr[1]
    const letter = dataArr[2]
    const pw = dataArr[3]
    let count = 0
    for (let i = 0; i < pw.length; i++) {
        if (pw[i] === letter) {
            count++
            if (count > max) return false
        }
    }

    return count >= min && count <= max
}

function parseData(dataArr) {
    let matrix = []
    for (let i = 0; i < dataArr.length; i++) {
        const splitData = dataArr[i].split(" ")
        const pwRange = splitData[0].split("-")

        const min = pwRange[0]
        const max = pwRange[1]
        const letter = splitData[1].substring(0, 1)
        const pw = splitData[2]
        let policy = [min, max, letter, pw]
        matrix.push(policy)
    }
    return matrix
}

exports.parseData = parseData
console.log(getResult(getData('input.txt')))