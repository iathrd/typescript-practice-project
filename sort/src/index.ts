import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharacterCollection} from './CharactersCollection';

const numberCollaction = new NumbersCollection([10,3,-5,1])
const sorter = new Sorter(numberCollaction);
const charactersCollection = new CharacterCollection('Xaayb')
const sortCaracter = new Sorter(charactersCollection);

sorter.sort()
sortCaracter.sort()

console.log(charactersCollection.data)