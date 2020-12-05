const { getData } = require("../helper.js")

function getResult(inputData) {
    let passPortObjs = parseData(inputData)
    let counter = 0
    for (let i = 0; i < passPortObjs.length; i++) {
        if (isValidPassport(passPortObjs[i])) counter++
    }
    return counter
}

function isValidPassport(obj) {
    const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i]
        if (!obj.hasOwnProperty(field)) return false
    }
    return true
}

function parseData(inputArr) {
    let outputData = []
    let passportData = {}
    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i]
        if (element !== "") {
            passportData = Object.assign(passportData, parse(element))
            if (i === inputArr.length - 1 ) outputData.push(passportData)
        } else {
            outputData.push(passportData)
            passportData = {}
        }
    }
    return outputData
}

function parse(fields) {
    let keyValues = fields.split(" ")
    let outputObj = {}
    for (let i = 0; i < keyValues.length; i++) {
        let keyValue = keyValues[i].split(":")
        outputObj[keyValue[0]] = keyValue[1]
    }
    return outputObj
}

exports.parseData = parseData
exports.isValidPassport = isValidPassport

console.log(getResult(getData("input.txt")))