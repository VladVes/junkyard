const arrOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrOfStrings: Array<string> = ['Alpha', 'Beta', 'Gamma'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse<number>(arrOfNumbers);
reverse(arrOfStrings); // same func works fine with the arrays of different types


function f<T>(a: T) {
  return a;
}

f<string>('zzz');
// the same as
f('zzz'); // type will be calculated automatically

type Gen<T = string> = {
  a: string;
  b: number;
  c: T;
};

function f2<T>(a: T): T {
  return a;
}

f2<Gen<boolean>>({ a: 'zzz', b: 1, c: true });
