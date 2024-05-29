import { Pessoa, Sort } from './model';

class View {
    displayPeople(people: Pessoa[]) {
        console.log("Sorted People:");
        people.forEach(person => console.log(person.nome, person.idade));
    }
}

const sort = new Sort();
const view = new View();

const people: Pessoa[] = [
    new Pessoa("Alice", 25),
    new Pessoa("Bob", 30),
    new Pessoa("Alice", 30),
    new Pessoa("Bob", 25),
    new Pessoa("Alice", 20)
];

const sortedPeople = sort.quickSort(people);
view.displayPeople(sortedPeople);
