import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -7, 0]);
const charactersCollection = new CharactersCollection("zxAAoi");
const numSorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);
numSorter.sort();
charSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
