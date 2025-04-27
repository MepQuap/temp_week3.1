// Challenge 8: Temperature Checker
function checkTemp(fahrenheit) {
  if (fahrenheit < 32) {
    return "Freezing";
  } else if (fahrenheit >= 32 && fahrenheit <= 50) {
    return "Cold";
  } else if (fahrenheit >= 51 && fahrenheit <= 70) {
    return "Mild";
  } else if (fahrenheit >= 71 && fahrenheit <= 90) {
    return "Warm";
  } else {
    return "Hot";
  }
}

console.log("Challenge 8:");
console.log(checkTemp(30));
console.log(checkTemp(45));
console.log(checkTemp(65));
console.log(checkTemp(75));
console.log(checkTemp(95));