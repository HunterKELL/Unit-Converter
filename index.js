/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unitNumber = 20;
let lengthArray = []
let volumeArray = []
let massArray = []
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

function findVolume() {
    let literNum = unitNumber / gallon
    //console.log(literNum)
    let literUnit = Number(literNum.toFixed(3))
    let gallonNum = unitNumber * gallon
    //console.log(gallonNum)
    let gallonUnit = Number(gallonNum.toFixed(3))

    volumeArray.push(literUnit)
    volumeArray.push(gallonUnit)
}

findVolume()
console.log(volumeArray)

function findMass() {
    let kilosNum = unitNumber / pound
    //console.log(kilosNum)
    let kilosUnit = Number(kilosNum.toFixed(3))
    let poundsNum = unitNumber * pound
    //console.log(poundsNum)
    let poundsUnit = Number(poundsNum.toFixed(3))

    massArray.push(kilosUnit)
    massArray.push(poundsUnit)
}

findMass()
console.log(massArray)