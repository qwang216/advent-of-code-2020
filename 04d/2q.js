const { getData } = require("../helper.js")
const { parseData } = require("../04d/1q.js")
const { isValidPassport } = require("../04d/1q.js")

function getResult(inputData) {
    let passports = parseData(inputData)//.filter(isValidPassport).filter(isValidPassportAddtionalCheck)
    let validPassports = getValidPassportsFrom(passports)//.filter(isValidPassportAddtionalCheck)

    var validCount = 0
    for (let i = 0; i < passports.length; i++) {
        if (isValidPassportAddtionalCheck(validPassports[i])) {
            validCount++
        }
    }
    return validCount
}

function getValidPassportsFrom(passports) {
    let output = []
    for (let i = 0; i < passports.length; i++) {
        let passport = passports[i]
        if (isValidPassport(passport)) output.push(passport)
    }
    return output
}

function isValidPassportAddtionalCheck(value) {
    print(value)
    return isInRange(value.byr, 1920, 2002) &&
            isInRange(value.iyr, 2010, 2020) &&
            isInRange(value.eyr, 2020, 2030) &&
            isValidHeight(value.hgt) &&
            isValidEyeColor(value.ecl) &&
            isValidPassportID(value.pid) &&
            isValidHairColor(value.hcl)

}

function isInRange(value, min, max) {
    return parseInt(value) >= min && parseInt(value) <= max
}

function isValidHeight(height) {
    let heightUnit = height.substr(height.length - 2, height.length)
    let heightValue = height.substr(0, height.length - 2)
    if (heightUnit === "cm") return isInRange(heightValue, 150, 193)
    if (heightUnit === "in") return isInRange(heightValue, 59, 75)
    return false
}

function isValidEyeColor(eyeColor) {
    const options = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
    for (option in options) {
        if (eyeColor == option) return true
    }
    return false
}

function isValidPassportID(id) {
    return parseInt(id) >= 000000000 && parseInt(id) <= 999999999
}

function isValidHairColor(color) {
    return new RegExp(/^#[0-9a-f]{6}$/i).test(color)
}

function print(obj) {
    console.log(obj)
}
console.log(getResult(getData("input.txt")))