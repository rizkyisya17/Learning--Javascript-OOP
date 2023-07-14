class Car{
    name
    speed //speed per lap

    constructor(name, speed){
        //completed the code
        this.name = name
        this.speed = speed
    }

    get getName(){
        //completed the code
        return this.name
    }

    get getSpeed(){
        //completed the code
        return this.speed
    }
}

class Race{
    #name
    #arrCar
    #length

    constructor(name, length){
        //completed the code
        this.#name = name
        this.#length = length
        this.#arrCar = []
 
    }

    addCar(objCar){
        this.#arrCar.push(objCar)
    }

    startRace(){
        //Buat race yang mensimulasikan balapan
        //Simulasikan jarak yang ditempuh oleh setiap mobil yang ada setiap lapnya sesuai dengan urutan masuk objCar di arrCar
        //Jika ada 1 mobil yang mencapai garis finish / length dari class Race, maka pemenang balapan sudah dapat ditentukan dan balapan selesai
        //Print status setiap lap (perhatikan expected output yang muncul)
        
  
        let speed = 0
        let race_start = true
        let lap = 1
        
        // while(race_start){
            
        //     console.log("Current Position for Loop " + lap)
    
        //     for (let j = 0; j < this.#arrCar.length; j++){
        //         speed = this.#arrCar[j].speed*lap
        //         console.log("Current Position of Car " + this.#arrCar[j].name + " is " + speed)
        //         if (speed >= 100){
        //             console.log("The Winner is " + this.#arrCar[j].name)
        //             race_start = false
        //             break;
        //         }
        //     }
            
        //     lap++

        // }
        
        

        //completed the code

        //console.log(this.#arrCar[1].speed*2)
        //console.log(this.#length)
        //console.log(this.#arrCar.length)
        //console.log(car_lap[0].speed + 20)
        console.log(this.#arrCar[2].name)
        //console.log(objCar1.speed*2)
    }
}


let objRace = new Race("Mandalika", 100)

let objCar1 = new Car("Yamahi", 10)
let objCar2 = new Car("Hondi", 17)
let objCar3 = new Car("Suzuka", 15)

objRace.addCar(objCar1)
objRace.addCar(objCar2)
objRace.addCar(objCar3)

objRace.startRace()
objCar1.getName()