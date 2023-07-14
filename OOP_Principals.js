class Animal {
    #name

    constructor(name){
        this.#name = name
    }

    eat(){
        console.log("Eat Animal")
    }

    // get value private
    get getName(){
        return this.#name
    }

    // change value private
    set setName(value){
        this.#name = value
    }
}

class Bird extends Animal{
    #numWing

    constructor(name, numWing){
        super(name)
        this.#numWing = numWing
    }

    // overriding
    eat(){
        console.log("Eat Bird")
    }

    get getWings(){
        return this.#numWing
    }

    set setWings(value){
        this.#numWing = value
    }
}

let eagle = new Bird("Yoyo", 2)

console.log(eagle.getName)
console.log(eagle.getWings)
eagle.eat()