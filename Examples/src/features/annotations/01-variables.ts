// type inference (if we do the initialization and declaration on the same line)
let apples = 5;
let speed = "fast";
let hasName = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "yellow", "blue"];
let myNumbers: number[] = [1, 2, 3];

// Classes
class SuperCar {}
let car: SuperCar = new SuperCar();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2. When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. When we have a variable whose type cannot be inferred correctly
let mySuperNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < mySuperNumbers.length; i++) {
  if (mySuperNumbers[i] > 0) {
    numberAboveZero = mySuperNumbers[i];
  }
}
