class Smartphone{
    #merk
    #amount

    constructor(merk, amount){
        this.#merk = merk
        this.#amount = amount
    }

    get getMerk(){
        //complete the code
        return this.#merk
    }

    get getAmount(){
        return this.#bamount
    }
    
}

class Store{
    #name
    #arrSmartphone

    constructor(name, arrSmartphone){
        //complete the code
        this.#name = name
        this.#arrSmartphone = []
    }

    addSmartphone(objSmartphone){
        //complete the code
        this.#arrSmartphone.push(objSmartphone)
    }

    getInfo(){
        console.log(this.#name + " Store have " + this.#arrSmartphone.length + " Smartphone Type with detail")
        for (let i = 0; i < this.#arrSmartphone.length; i++){
            // console.log(this.#arrSmartphone[i])
            console.log("Merek : " + this.#arrSmartphone[i].merk + " has " + this.#arrSmartphone[i].amount + " Unit")
        }
        //complete the code
        //print each smartphone merk with looping 

    }
}

let objStore = new Store("Tangerang Store")

let objSmart1 = new Smartphone("Oppa", 10)
let objSmart2 = new Smartphone("Samsul", 5)

objStore.addSmartphone(objSmart1)
objStore.addSmartphone(objSmart2)
// console.log(objSmart1.getMerk)

objStore.getInfo()