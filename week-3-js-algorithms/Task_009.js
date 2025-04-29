// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."
// Your code here
const myAge = 30; // Replace with your actual age

function compareAge(name, age) {
  if (age > myAge) {
    return `${name} is older than me.`;
  } else if (age < myAge) {
    return `${name} is younger than me.`;
  } else {
    return `${name} is the same age as me.`;
  }
}
console.log(compareAge("Joel", 36));   // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 24)); // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 28));   // ➞ "Lily is younger than me." (assuming myAge is 30)