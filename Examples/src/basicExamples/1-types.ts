const someStr: string = 'Hello';

console.log(someStr);

let isFetching: boolean = false;

let num: number = 55;
// num = 'some string'; // error TS2322: Type '"some string"' is not assignable to type 'number'.

// Array
const numberArray1: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const words1: string[] = ['alpha', 'beta'];
const words2: Array<string> = ['alpha', 'beta'];

// Tuple
const contact: [string, number]  = ['John', 89233307777];

// Any
let someVar: any = 777;
someVar = 'string'; //no error because of any type

//func
function sayName(name: string): void {
  console.log('My name: ', name);
}
sayName('John');

// Never - if the function will never stop except throw error 
function throwError(message: string): never {
  while (true) {
    throw new Error(message);
  }
}

// Type
type Login = string; // alias
type ID = string | number; // when for example id can be string or number

type SomeType = string | null | undefined;




