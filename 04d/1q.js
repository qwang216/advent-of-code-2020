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
    console.log(obj)
    const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i]
        console.log(i)
        if (!obj.hasOwnProperty(field)) return false
    }
    return true
}

function parseData(inputArr) {
    let outputData = []
    let passportData = {}
    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i]
        if (element === "") {
            outputData.push(passportData)
            passportData = {}
        } else {
            passportData = Object.assign(passportData, parse(element))
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

console.log(getResult(getData("input.txt")))