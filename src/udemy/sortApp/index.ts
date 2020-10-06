import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -7, 0]);
const charactersCollection = new CharactersCollection("zxAAoi");
numbersCollection.sort();
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-1);
linkedList.add(-3);
linkedList.add(501);
linkedList.add(0);
linkedList.add(77);

linkedList.sort();
linkedList.print();
