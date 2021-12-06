// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {

    return [drivers[0], drivers[1]];
    
}

const returnLastTwoDrivers = function (drivers) {
    
    return [drivers[2], drivers[3]];
}
    
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor) {
    return function (x) {
        return x * factor;
        }
    }


let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers) { 
  return selectingDrivers(drivers);
}
    

