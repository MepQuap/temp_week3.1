// Challenge 6: Season Checker
function checkSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
      return "Winter";
    } else if (month >= 3 && month <= 5) {
      return "Spring";
    } else if (month >= 6 && month <= 8) {
      return "Summer";
    } else if (month >= 9 && month <= 11) {
      return "Autumn";
    } else {
      return "Invalid month";
    }
  }
  
  console.log("Challenge 6:");
  console.log(checkSeason(1));
  console.log(checkSeason(4));
  console.log(checkSeason(7));
  console.log(checkSeason(10));