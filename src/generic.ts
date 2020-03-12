const cars = ['Ford', 'Audi'];
const cars2: Array<string> = ['Ford', 'Audi'];


const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

promise.then(data => console.log(data.toLowerCase()));


function mergeObjects<T1 extends object, T2 extends object>(a: T1, b: T2) {
  return Object.assign({}, a, b);
}

// const merged1 = mergeObjects('str1', 'str2'); // error because T1 extends object
const merged2 = mergeObjects({ name: 'John' }, { age: 30 });


// ================================= 
 
 
 interface ILength { 
   length: number;
 }

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `In this obj ${value.length} chars`,
  }
}
console.log(withCount(['I', 'am', 'array'])); // no error cause it has a length property
console.log(withCount('hello!!! wake up!!!')); // no error cause it has a length property

// ===============================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: 'john',
  age: 26,
  job: 'js',
};

console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'job'));

// ================================

class Collection<T extends number | string | boolean> {
  // private _items: T[] = []; // we don't need that because we can do it from the constructor below
  constructor(private _items: T[] = []) {
  }

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item);
  }

  get items() {
    return this._items;
  }
}

const strings = new Collection<string>(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 3]);
numbers.add(5);
numbers.remove(2);
console.log(numbers.items);

// const objCol = new Collection([{ a: 1 }, { b: 2 }]); // will emit an error because T extends only primitive types
// objCol.remove({ b: 2 });

// =====================================

interface Vehicle {
  type: string;
  year: number;
}

function createVehicle(type: string, year: number): Vehicle {
  const vehicle: Partial<Vehicle> = {}; // let ts know that we are creating a temporary object without required fields

  return vehicle as Vehicle; // as if we confirm that this is really the same type
}


// 

const cars3: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars3.shift(); // error because shift mutate array but we declare it as Readonly

const v1: Readonly<Vehicle> = {
  type: 'car',
  year: 2020,
};

// v1.type = 'Airplane' // Cannot assign to 'type' because it is a read-only property