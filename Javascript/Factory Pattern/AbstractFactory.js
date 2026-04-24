const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
class HotDrink{
    consume(){}
}
class Tea extends HotDrink{
    consume(){
        console.log("this tea is nice with lemon");
    }
}

class Coffee extends HotDrink{
    consume(){
        console.log("this coffee is delicious");
    }
}

class HotDrinkFactory{
    prepare(amount){ /* factory */}
}

class CoffeeFactory extends HotDrinkFactory{
    prepare(amount){
        console.log("Preparing Coffee");
        return new Coffee();
    }
}

class TeaFactory extends HotDrinkFactory{
    prepare(amount){
        console.log("Preparing tea");
        return new Tea();
    }
}

let AvailableDrink = Object.freeze({
    coffee: CoffeeFactory,
    tea: TeaFactory
})

class HotDrinkMachine{
    constructor() {
        this.factories = {};
        for(let drink in AvailableDrink){
            this.factories[drink] = new AvailableDrink[drink]();
        }
    }
    interact(consumer){
        rl.question('Please specify drink and amount',answer => {
            let parts = answer.split(' ');
            let name = parts[0];
            let amount = parseInt(parts[1]);
            let d = this.factories[name].prepare(amount);
            rl.close();
            consumer(d);

        })
    }
    makeDrink(type){
        switch (type){
            case 'tea':
                return new TeaFactory().prepare(200);
            case 'coffee':
                return new CoffeeFactory().prepare(50);
            default:
                throw new Error('');
        }
    }
}
let machine = new HotDrinkMachine();
machine.interact(function(drink){
    drink.consume();
})