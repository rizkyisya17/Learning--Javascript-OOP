class Animal {
    #name
    #legs
    #color

    constructor(name, legs, color){
        this.#name = name
        this.#legs = legs
        this.#color = color
    }

    get getInfo(){
        return `This is information of ${this.#name}`
        return `${this.#name} has ${this.#legs} legs and has a ${this.#color} color`
    }


}

class CodingID extends Animal {

    constructor (name, legs, color){
        super(name, legs, color)
    }

}

class Duck extends Animal {
    voice
    
    constructor (name, legs, color){
        super(name, legs, color)
    }

    get getVoice(){
        return "Kwak Kwak"
    }
}

class Cat extends Animal {

    constructor (name, legs, color){
        super(name, legs, color)
    }

    get getVoice(){
        return "Meong Meong"
    }
}

let kucing = new CodingID("Kucing", 2, "Blue")

console.log(kucing.getInfo)