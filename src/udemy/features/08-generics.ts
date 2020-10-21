// classes generics
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);
// type inference
const arr = new ArrayOfAnything(["a", "b", "c"]);

// functions generics
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);
// type inference
printAnything(["a", "b", "c"]);

// generic constraint

class Zebra {
  print() {
    console.log("I am a zebra");
  }
}

class Hors {
  print() {
    console.log("I am a horse");
  }
}

interface Printable {
  print(): void;
}

function printZebrasOrHorses<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
// will leads to error:
// printZebrasOrHorses([1, 2, 3]);
// next ones will works fine:
printZebrasOrHorses<Zebra>([new Zebra(), new Zebra(), new Zebra()]);
printZebrasOrHorses<Hors>([new Hors(), new Hors(), new Hors()]);
