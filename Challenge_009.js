// Challenge 9: Traffic Sign
function checkSign(color) {
    if (color === "red") {
      return "Stop";
    } else if (color === "yellow") {
      return "Caution";
    } else if (color === "green") {
      return "Go";
    } else {
      return "Unknown sign";
    }
  }
  
  console.log("Challenge 9:");
  console.log(checkSign("red"));
  console.log(checkSign("yellow"));
  console.log(checkSign("green"));