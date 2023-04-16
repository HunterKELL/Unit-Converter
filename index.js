/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unitNumber = 20;
let lengthArray = []
const feet = 3.281
const gallon = 0.264
const pound = 2.204
    
const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    //console.log("clicked")
    
})
//console.log(numberInput)

function findLength() {
    let meterNum = unitNumber / feet
    //console.log(meterNum)
    let meterUnit = Number(meterNum.toFixed(3))
    let feetNum = unitNumber * feet
    //console.log(feetNum)
    let feetUnit = Number(feetNum.toFixed(3))

    lengthArray.push(feetUnit)
    lengthArray.push(meterUnit) 
}

findLength()
console.log(lengthArray)