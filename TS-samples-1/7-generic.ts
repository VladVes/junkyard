const arrOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrOfStrings: Array<string> = ['Alpha', 'Beta', 'Gamma'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrOfNumbers);
reverse(arrOfStrings); // same func works fine with the arrays of different types