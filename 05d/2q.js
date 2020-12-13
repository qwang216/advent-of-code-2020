const { getData } = require("../helper.js")
const { calculateSeatID } = require("../05d/1q.js")

function getResult(inputDate) {

    let seats = []
    for (let i = 0; i < inputDate.length; i++) {
       let id = calculateSeatID(inputDate[i]) 
       seats.push(id)
    }

    let sortedSeats = seats.sort((a, b) => a - b)
    // console.log(sortedSeats)
    for (let i = 0; i < sortedSeats.length - 1; i++) {
        if (sortedSeats[i] + 2 === sortedSeats[i + 1]) {
          return sortedSeats[i] + 1
        }
      }
}

console.log(getResult(getData("input.txt")))