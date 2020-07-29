/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge=33
  if (votingAge >= 18) {
    console.log("answer to task 1 is true");
  } else {
    console.log("answer to task 1 is false");
  }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let myCat;
const myDog = "bark";

if (myDog == "woof") {
  myCat = "meow";
} else if (myDog == "Poo") {
  myCat = "hairball";
} else {
  myCat = "Litter";
}

console.log(myCat);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const text = "1999";
let integer = parseInt(text, 10);
console.log(integer);

//Task d: Write a function to multiply a*b
function multiply(a, b) {
  console.log(a * b);
}
multiply(16, 3);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
function myAge(a) {
  console.log("answer to task 2 is " + a * 7 + " years old in dog years");
}
myAge(15);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year // birth to <2 month, feed mom//
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(age, pounds) {
  if (age >= 1) {
    if (pounds <= 5) {
      return pounds * 0.05;
    } else if (pounds >= 6 && pounds <= 10) {
      return pounds * 0.04;
    } else if (pounds >= 11 && pounds <= 15) {
      return pounds * 0.03;
    } else {
      return pounds * 0.02;
    }
  }
  if (age < 1 && age >= 7 / 12) {
    return pounds * 0.04;
  } else if (age < 7 / 12 && age >= 4 / 12) {
    return pounds * 0.05;
  } else if (age < 4 / 12 && age >= 2 / 12) {
    return pounds * 0.1;
  } else if (age < 2 / 12) {
    return "Feed Mom";
  }
}
console.log( "Your dog needs " , dogFeeder(1, 15), " of food.");

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function winLoss(playerOption) {
  let computerNumber = Math.floor(Math.random() * 3 + 1);
  let player=0;
  
  if (playerOption.toLowerCase() === "rock") {
    player = 1;
  } else if (playerOption.toLowerCase() === "paper") {
    player = 2;
  } else {
    player = 3;
  }
  // rock: 1, paper:2, scissors:3
  if (player === 1 && computerNumber === 1) {
    console.log("Tie Game");
  } else if (player === 2 && computerNumber === 2) {
    console.log("Tie Game");
  } else if (player === 3 && computerNumber === 3) {
    console.log("Tie Game");
  } else if (player === 1 && computerNumber === 2) {
    console.log("Computer Wins");
  } else if (player === 1 && computerNumber === 3) {
    console.log("Player Wins");
  } else if (player === 2 && computerNumber === 1) {
    console.log("Player Wins");
  } else if (player === 2 && computerNumber === 3) {
    console.log("Computer Wins");
  } else if (player === 3 && computerNumber === 1) {
    console.log("Computer Wins");
  } else if (player === 3 && computerNumber === 2) {
    console.log("Player Wins");
  }
}
winLoss("paper")

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kiloToMiles(inPut) {
  console.log("Answer to task 5a is " + inPut * 0.621371);
}
kiloToMiles(34);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCent(inPut) {
  console.log("Answer to task 5b is " + inPut * 30.48);
  console.log("");
}
feetToCent(6);
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong (numBottles) {
  for (let i = numBottles; i >= 0; i--){
  if (i>=1 || i<=0){
    bottles = "bottles"
  }if (i==1) {
    bottles = "bottle"
  }
  console.log(`${i +" "+bottles} of soda on the wall, ${i+" "+bottles} of soda. Take one down, pass it around, ${i-1+" "+ bottles} of soda on the wall.`);
 }
 console.log("");  
}
annoyingSong(4)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
const randNum = Math.floor(Math.random() * 100 + 1);
function myGrade() {
  if (randNum >= 90) {
    console.log(randNum + "%. " + "A is your grade");
  } else if (randNum >= 80 && randNum <= 89) {
    console.log(randNum + "%. " + "B is your grade");
  } else if (randNum >= 70 && randNum <= 79) {
    console.log(randNum + "%. " + "C is your grade");
  } else if (randNum >= 60 && randNum <= 69) {
    console.log(randNum + "%. " + "D is your grade");
  } else {
    console.log(randNum + "%. " + "F is your grade");
  }
}
myGrade(randNum);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

// let saying = "Now is the time for All good men to come to the Aid of their country";
// // console.log(saying.length);
// const countVowels= saying.substring(0,68)
//   if (saying.includes('a'||'e'||'i'||'o'||'u'||'A'||'E'||'I'||'O'||'U')){
//     return(countVowels.length);
//   }
  
// console.log(countVowels);


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
// function winLoss(playerOption) {
//   let computerNumber = Math.floor(Math.random() * 3 + 1);
//   // let player = 0;
//   let player=prompt("Please enter `rock`, `paper`, or `scissors`", "rock paper scissors");
  
//   if (player.toLowerCase() === "rock") {
//     player = 1;
//   } else if (player.toLowerCase() === "paper") {
//     player = 2;
//   } else if (player.toLowerCase() === "scissors"){
//     player = 3;
//   } else if (player.toLowerCase() == null){
//     player=Math.floor(Math.random() * 3 + 1);
//   } else {
//     player=Math.floor(Math.random() * 3 + 1);
//   }
//   // rock: 1, paper:2, sissors:3
//   if (player === 1 && computerNumber === 1) {
//     console.log("Tie Game");
//   } else if (player === 2 && computerNumber === 2) {
//     console.log("Tie Game");
//   } else if (player === 3 && computerNumber === 3) {
//     console.log("Tie Game");
//   } else if (player === 1 && computerNumber === 2) {
//     console.log("Computer Wins");
//   } else if (player === 1 && computerNumber === 3) {
//     console.log("Player Wins");
//   } else if (player === 2 && computerNumber === 1) {
//     console.log("Player Wins");
//   } else if (player === 2 && computerNumber === 3) {
//     console.log("Computer Wins");
//   } else if (player === 3 && computerNumber === 1) {
//     console.log("Computer Wins");
//   } else if (player === 3 && computerNumber === 2) {
//     console.log("Player Wins");
//   }
// }
// winLoss()