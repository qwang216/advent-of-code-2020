const { getData } = require("../helper.js")
const { countTree } = require("../03d/1q.js")

function getResult() {
    let data = getData("input.txt")
    let result1 = countTree(data, {r: 1, c: 1})
    let result2 = countTree(data, {r: 1, c: 3})
    let result3 = countTree(data, {r: 1, c: 5})
    let result4 = countTree(data, {r: 1, c: 7})
    let result5 = countTree(data, {r: 2, c: 1})
    return result1 * result2 * result3 * result4 * result5
}

console.log(getResult())