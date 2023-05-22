
const argvs = process.argv
const argv = argvs.slice(2)
const time = argv[0]

angle = getClockAngle(time)
console.log("Angle = " + angle)

function getClockAngle(time){
    angle = 0
    hour = parseInt(time.substring(0,2))
    min = parseInt(time.substring(3,5))
    oneBlockAngle = 360 / 12

    console.log("hour = " + hour)
    console.log("min = " + min)
    
    if(hour >= 12){
        hour = hour - 12
    }

    minHand = min / 60 * 360
    hourHand =  (hour * oneBlockAngle) + (min / 60 * oneBlockAngle)
    console.log("minHand = " + minHand)
    console.log("hourHand = " + hourHand)

    angle = minHand - hourHand
    console.log("angle = " + angle)

    if(Math.abs(angle) > 180){
        shortAngle = 360 - Math.abs(angle) 
    }
    else{
        shortAngle = Math.abs(angle) 
    }

    return shortAngle
}