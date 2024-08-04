// .......................................................the 1 one .................................................................
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const array2 = nums.map((currentElement) => {
  return currentElement * 2;
});

// console.log(array2);

// .......................................................the 2 one .................................................................

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const [first, second] = pizzaToppings;

// console.log(first);
// console.log(second);

// .......................................................the 3 one .................................................................
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//   make: "Audi",
//   model: "q5",
// };
// const { make, model } = car;
// console.log(make);
// console.log(model);

// .......................................................the 4 one .................................................................

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const controversialPizzaToppings = [...pizzaToppings];
// console.log(controversialPizzaToppings);
// Your code here

// .......................................................the 5 one .................................................................
// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: "Audi",
  model: "q5",
};

const myCar = { ...car };
myCar.model = "q7";
// console.log("car", car);
// console.log("mycar", myCar);

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

// ........................................... the 6 one .....................................................................
// Create an object named userProfile.
const userProfile = {
  propertyName: " muntadher, 22, or me.alrahim.02@gmail.com",
};
const propertyName = "propertyName";
const printit = userProfile[propertyName];
// console.log(printit);
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
// ........................................... the 7 one .....................................................................

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`
function sentence(noun = "cat", adjective = "white") {
  return console.log(`the ${noun} is ${adjective}`);
}

sentence();

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

// Convert the following `if...else` statement in to a ternary:
//...................................................the 9 one ..........................................
let pizza = "tasty";

let check = (pizza = "tasty" ? "yum" : "yuck");

// ................................................... the 10 one .......................................
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default
let LANG = localLangConfig || 'en'

// Log the result
// console.log('Language setting:', LANG);


//............................................
// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

let USER_THEME = userSavedTheme || 'light'
// Log the result
// console.log('User theme setting:', USER_THEME);

// ....................................... the 11 one ......................................

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.age?.name; 

console.log(cat);