// Code your solution in this file!
// Removes the first two elements in an array
const returnFirstTwoDrivers = function (namesArr) {
    return namesArr.slice(0, 2);
}

// Removes the last two elements in an array
const returnLastTwoDrivers = function (namesArr) {
    return namesArr.slice(namesArr.length - 2, namesArr.length);
}

// Array with last two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a function to muliply a fare for a ride
function createFareMultiplier(multiplierInt) {
    return function (fareInt) {
        return fareInt * multiplierInt;
    }
}

// Variable with function above assigned to double fare
const fareDoubler = createFareMultiplier(2);

// Variable with function above assigned to triple fare
const fareTripler = createFareMultiplier(3);

// Function that takes in two arguments (namesArr and one of the first two functions) 
// and returns either first or last two drivers
function selectDifferentDrivers(namesArr, firstOrLastDriver) {
    return firstOrLastDriver(namesArr);
}