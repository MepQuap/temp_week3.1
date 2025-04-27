// Challenge 5: Multi-level conditions III
function isLeapYear(year) {
    if (year % 400 === 0) {
      return "Leap year";
    } else if (year % 100 === 0) {
      return "Not a leap year";
    } else if (year % 4 === 0) {
      return "Leap year";
    } else {
      return "Not a leap year";
    }
  }
  
  console.log("Challenge 5:");
  console.log(isLeapYear(2000));
  console.log(isLeapYear(1800));
  console.log(isLeapYear(2004));
  console.log(isLeapYear(2021));