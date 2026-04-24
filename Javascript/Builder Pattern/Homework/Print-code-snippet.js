/**
 * Output
 *  class Person {
 *      constructor(name,age){
 *          this.name = name;
 *          this.age=age;
 *      }
 *  }
 *  lt cb = new CodeBuilder('Person');
 *   cb.addField('name').addField('age')
 *
 *
 *
 *
 */

class CodeBuilder {
    constructor(className){
        this.className = className;
        this.fields = [];
    }
    addField(name){
        this.fields.push(name);
        return this;
    }
    toString(){
        let cbString = `class ${this.className} { \n`;
          cbString += `constructor(${this.fields.join(', ')}) { \n`;
          this.fields.forEach(field => {
              cbString += `  this.${field} = ${field}; \n`;
          })
          cbString += `  }\n`;
          cbString += `}\n`;
          return cbString;
    }
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('person');
console.log(cb.toString());

let foo = new CodeBuilder('Foo');
console.log(foo.toString());