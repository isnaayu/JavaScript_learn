class Animal{
    constructor(name, food){
        this.name = name;
        this.food = food;
    }

    sound(){
        console.log(`${this.name} makes a sound`)
    }

}

class Dog extends Animal{
    constructor(name, food){
        super(name, food)
    }

    gonggong(){
        console.log("gong")
    }

}

class Cat extends Animal{
    constructor(name, food){
        super(name, food)
    }

}

function makeASound(animal){
    animal.sound()
}

makeASound(new Cat("Garfild"))
makeASound(new Dog("Scoby"))