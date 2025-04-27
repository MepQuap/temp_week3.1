// Challenge 10: Meal Suggestion
function suggestMeal(time, diet) {
    if (time === "morning") {
      if (diet === "vegan") {
        return "Fruit smoothie with oats";
      } else if (diet === "vegetarian") {
        return "Vegetarian scrambled eggs with toast";
      } else if (diet === "omnivore") {
        return "Bacon and eggs with toast";
      }
    } else if (time === "afternoon") {
      if (diet === "vegan") {
        return "Vegan burrito";
      } else if (diet === "vegetarian") {
        return "Vegetarian pizza";
      } else if (diet === "omnivore") {
        return "Chicken sandwich";
      }
    } else if (time === "evening") {
      if (diet === "vegan") {
        return "Vegan lentil stew";
      } else if (diet === "vegetarian") {
        return "Vegetarian pasta";
      } else if (diet === "omnivore") {
        return "Steak with vegetables";
      }
    }
    return "No meal suggestion available for this time and diet.";
  }
  
  console.log("Challenge 10:");
  console.log(suggestMeal("morning", "vegan"));
  console.log(suggestMeal("morning", "vegetarian"));
  console.log(suggestMeal("morning", "omnivore"));
  console.log(suggestMeal("afternoon", "vegan"));
  console.log(suggestMeal("afternoon", "vegetarian"));
  console.log(suggestMeal("afternoon", "omnivore"));
  console.log(suggestMeal("evening", "vegan"));
  console.log("---");