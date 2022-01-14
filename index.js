//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (Drivers){
    return Drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (Drivers){
    return Drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(){
        return integer*integer;
    };
} 

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

const selectDifferentDrivers = function(drivers, x){
    if (x === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);}
    else
    return returnLastTwoDrivers(drivers);
}

