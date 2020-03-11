// keyof
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
// key = 'random' // Type '"random"' is not assignable to type '"name" | "age"'.ts(2322)


// Exclude and Pick
type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: string;
};

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>; // type UserKeysNoMeta will contains fields name and email only
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>// will do the same as previous 