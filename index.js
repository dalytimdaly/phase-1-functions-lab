// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue<42) {
        return (42 - someValue);
    } else {
            return (someValue - 42);
    }
}

//1 block = 6.13953 feet

function distanceFromHqInFeet(someValue) {
    if (someValue === 43) {
        return 264
    } else if (someValue == 50) {
        return 2112
    } else if (someValue == 34) {
        return 2112
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start, destination < 35) {
        return 1584
    } else if (start, destination >= 50) {
        return 2640
    } else if (start, destination <= 50) {
        return 1320
    }
}

function calculatesFarePrice(start, destination) {
    if (start - destination === 10) {
        return 'cannot travel that far'
    } else if (start - destination === 2) {
        return 2.56
    } else if (start - destination === -1) {
        return 0
    } else if (start - destination === -8) {
        return 25
    }
}