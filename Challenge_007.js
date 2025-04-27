// Challenge 7: FizzBuzz Simplified
function fizzBuzzSimplified(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return number;
    }
  }
  
  console.log("Challenge 7:");
  console.log(fizzBuzzSimplified(3));
  console.log(fizzBuzzSimplified(5));
  console.log(fizzBuzzSimplified(15));
  console.log(fizzBuzzSimplified(2));