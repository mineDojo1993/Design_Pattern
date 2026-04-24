class Person {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}

class PersonFactory {
    createPerson(name){
        return new Person(name, PersonFactory.id++);
    }
}

PersonFactory.id = 0;

const p1 = new PersonFactory().createPerson('kevin');
console.log(p1);
const p2 = new PersonFactory().createPerson('Juan');
console.log(p2);
