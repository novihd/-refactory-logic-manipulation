function rangeLeapYear(firstYear, secondYear) {
    const yearRange = [];
    for (var i = firstYear; i <= secondYear; i++) {
        yearRange.push(i);
    }
    
    const leapYear = [];
    yearRange.forEach(function(year) { 
       if (isLeapYear(year)) 
       leapYear.push(year);
    });
    
    return leapYear;

}

function isLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
       return year;
    } else {
        return false;
    }
}

const firstYear = parseInt(prompt("Enter first year:"));
const secondYear = parseInt(prompt("Enter second year:"));

console.log(rangeLeapYear(firstYear,secondYear));