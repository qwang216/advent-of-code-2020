const { getData } = require("../helper.js")
const { parseData } = require("../04d/1q.js")
const { isValidPassport } = require("../04d/1q.js")

function getResult(inputData) {
    let passports = parseData(inputData)
    let validPassports = getValidPassportsFrom(passports)
    return validPassports.length
}

function getValidPassportsFrom(passports) {
    let output = []
    for (let i = 0; i < passports.length; i++) {
        let passport = passports[i]
        if (isValidPassport(passport) &&  isValidPassportAddtionalCheck(passport)) {
            output.push(passport)
        }
    }
    return output
}

function isValidPassportAddtionalCheck(passport) {
    return isInRange(passport.byr, 1920, 2002) &&
            isInRange(passport.iyr, 2010, 2020) &&
            isInRange(passport.eyr, 2020, 2030) &&
            isValidHeight(passport.hgt) &&
            isValidEyeColor(passport.ecl) &&
            isValidPassportID(passport.pid) &&
            isValidHairColor(passport.hcl)

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
    for (let i = 0; i < options.length; i++) {
        const option = options[i]
        if (eyeColor === option) return true
    }
    return false
}

function isValidPassportID(pid) {
    return new RegExp(/^[0-9]{9}$/).test(pid)
}

function isValidHairColor(color) {
    return new RegExp(/^#[0-9a-f]{6}$/i).test(color)
}

console.log(getResult(getData("input.txt")))