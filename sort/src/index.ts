import { NumbersCollections } from './NumbersCollections';
import { CharactersCollections } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollections([-4, 7, 111, -29]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollections = new CharactersCollections("ZxYmba");
characterCollections.sort();
console.log(characterCollections.data);

const linkedList = new LinkedList;
linkedList.add(100);
linkedList.add(2);
linkedList.add(-3);
linkedList.add(-7);
linkedList.sort();
linkedList.print();

