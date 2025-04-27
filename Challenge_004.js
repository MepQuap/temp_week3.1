// Challenge 4: Multi-level conditions II
function checkEligibility(age) {
    if (age >= 21) {
      return "Can vote, drive, and drink";
    } else if (age >= 18) {
      return "Can vote and drive";
    } else if (age >= 16) {
      return "Can drive";
    } else {
      return "Can't vote, drive, or drink";
    }
  }
  
  console.log("Challenge 4:");
  console.log(checkEligibility(15));
  console.log(checkEligibility(16));
  console.log(checkEligibility(18));
  console.log(checkEligibility(22));
   
  