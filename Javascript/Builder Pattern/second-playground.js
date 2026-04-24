class Person{
    constructor(){
        this.stressAddress = this.postCode = this.city = '';
        this.companyName = this.position = '';
        this.annualIncome = 0;
    }
    toString(){
        return `Person lives at ${this.stressAddress}, ${this.city}, ${this.postCode}\n`+
        ` and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`;
    }
}

class PersonBuilder{
    constructor(person = new Person()){
        this.person = person;
    }
    get lives(){
        return new PersonAddressBuilder(this.person);
    }
    get works(){
        return new PersonJobBuilder(this.person);
    }
    build(){
        return this.person;
    }

}

class PersonJobBuilder extends PersonBuilder{
    constructor(person) {
        super(person);
    }
    at(companyName){
        this.person.companyName = companyName;
        return this;
    }
    asA(position){
        this.person.position = position;
        return this;
    }
    earning(annualIncome){
        this.person.annualIncome = annualIncome;
        return this;
    }
}

class PersonAddressBuilder extends PersonBuilder{
    constructor(person) {
        super(person);
    }
    at(stressAddress){
        this.person.stressAddress = stressAddress;
        return this;
    }
    withPostCode(postCode){
        this.person.postCode = postCode;
        return this;
    }
    in(city){
        this.person.city = city;
        return this;
    }
}

let personBuilder = new PersonBuilder();
let person = personBuilder.lives.at('123 london rondon').in('London').withPostCode('SW12BC')
                          .works.at('FabriKam').asA('Engineer').earning(123000)
                           .build();
console.log(person.toString());

