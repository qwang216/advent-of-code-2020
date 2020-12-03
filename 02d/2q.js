const { getData } = require("../helper.js")

function getResult(inputData) {
    const arrayData = parseData(inputData)
    var count = 0
    for (let i = 0; i < arrayData.length; i++ ) {
        let data = arrayData[i]
        if (isValidPw(data)) count++
    }
    return count
}


// parameter = [position, position, letter, pw]
function isValidPw(dataArr) {
    const p1 = dataArrp[0]
    const p2 = dataArr[1]
    const pw = dataArr[3]
    if (p1 > pw.length) return false
    const letter = dataArr[2]
    let count = 0
    if (pw[p1] === letter) count ++
    if (pw[p2] === letter) count ++ 
    return count == 1
}

function parseData(data) {
    return // [[min, max, letter, pw]]
}

console.log(getResult(getData('input.txt')))