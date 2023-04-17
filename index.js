let unitNumber = ''
let lengthArray = []
let volumeArray = []
let massArray = []
const feet = 3.281
const gallon = 0.264
const pound = 2.204
    
const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")

const lengthMeterFeet = document.getElementById("length-meter-feet")
// 20 meters = 65.616 feet | 20 feet = 6.096 meters
const volumeLiterGallon = document.getElementById("volume-liters-gallons")
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
const massKiloPounds = document.getElementById("mass-kilograms-pounds")
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

convertBtn.addEventListener("click", function() {
    value = numberInput.value
    unitNumber = Number(value)
    findLength()
    findVolume()
    findMass()
    conversionText()
    clearArrays()
})

// Functions for the conversions
function findLength() {
    let meterNum = unitNumber / feet
    let meterUnit = Number(meterNum.toFixed(3))
    let feetNum = unitNumber * feet
    let feetUnit = Number(feetNum.toFixed(3))

    lengthArray.push(feetUnit)
    lengthArray.push(meterUnit) 
}

function findVolume() {
    let literNum = unitNumber / gallon
    let literUnit = Number(literNum.toFixed(3))
    let gallonNum = unitNumber * gallon
    let gallonUnit = Number(gallonNum.toFixed(3))

    volumeArray.push(gallonUnit)
    volumeArray.push(literUnit)
}

function findMass() {
    let kilosNum = unitNumber / pound
    let kilosUnit = Number(kilosNum.toFixed(3))
    let poundsNum = unitNumber * pound
    let poundsUnit = Number(poundsNum.toFixed(3))

    massArray.push(poundsUnit)
    massArray.push(kilosUnit)
}

//Function for adding the text after converting
function conversionText() {
    let foot = lengthArray[0]
    let meters = lengthArray[1]
    let lengthText = 
    `${unitNumber} meters = ${foot} feet | ${unitNumber} feet = ${meters} meters`

    lengthMeterFeet.innerHTML = lengthText

    let gallons = volumeArray[0]
    let liters = volumeArray[1]
    let volumeText = 
    `${unitNumber} liters = ${gallons} gallons | ${unitNumber} gallons = ${liters} liters`

    volumeLiterGallon.innerHTML = volumeText

    let pounds = massArray[0]
    let kilograms = massArray[1]
    let massText = 
    `${unitNumber} kilos = ${pounds} pounds | ${unitNumber} pounds = ${kilograms} kilos`

    massKiloPounds.innerHTML = massText
}

function clearArrays() {
    lengthArray = []
    volumeArray = []
    massArray = []
}