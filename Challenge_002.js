// Challenge 2: Multi-level conditions
function assignGrade(score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  //Usage examples:
  console.log("Challenge 2:");
  console.log(assignGrade(95));
  console.log(assignGrade(85));
  console.log(assignGrade(75));
  console.log(assignGrade(65));
  console.log(assignGrade(55)); 