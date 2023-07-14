class Point{
    #reason
    #amount

    setPointDetail(reason, amount){
        //complete the code 10 points
        this.#reason = reason
        this.#amount = amount

    }

    get getReason(){
        return this.#reason
    }

    get getAmount(){
        return this.#amount
    }

}

class Employee {
    #name
    #arrPoint


    constructor(name){
        this.#name = name
        this.#arrPoint = []
    }

    addPoint(objPoint){
        //complete the code 10 points
        //add one object Point to #arrPoint (array of Point)
        this.#arrPoint.push(objPoint)
    }

    currentPoints(){
        //complete the code 20 points
        //Return an integer current point
        let total = 0
        for(let i = 0; i < this.#arrPoint.length; i++){
            total += this.#arrPoint[i].getAmount
        }
       return total

    }

    get getName(){
        return this.#name
    }

    printHistoryPoints(){
        console.log("This is History Point from " + this.#name)

        //complete the code 30 points
        /*
            Expected Output :
                This is History Point from Badrun
                Added 100 cause Project OnTime
                Added 25 cause Innovation for Team
                Current Point : 125 Points
        */

        for(let i = 0; i < this.#arrPoint.length; i++){
            if (this.#arrPoint[i].getAmount > 0){
                console.log("Added", this.#arrPoint[i].getAmount, "cause", this.#arrPoint[i].getReason)
            }
            else{
                console.log("Substraction", this.#arrPoint[i].getAmount, "cause", this.#arrPoint[i].getReason)
            }
        }
        

        console.log("Current Point :", this.currentPoints(), "Points")
        
    }

}

class Division{
    #name
    #arrEmployee

    constructor(name){
        this.#name = name
        this.#arrEmployee = []
    }

    addEmployee(objEmployee){
        this.#arrEmployee.push(objEmployee)
    }

    get getName(){
        return this.#name
    }

    getBestEmployee(){
        //complete the code 30 points
        /*
            Expected Output :
                The Best Employee from Project Division is Badrun with 125 Points
        */
        
        
        let arr = []
        for(let i = 0; i < this.#arrEmployee.length; i++){
            const obj = { name: this.#arrEmployee[i].getName, division: this.#name, points: this.#arrEmployee[i].currentPoints() }
            arr.push(obj)
        }
        
        
        let arr2 = []
        for (let j = 0; j < arr.length; j++){
            if (arr[j].division == this.#name){
                let obj2 = { name: arr[j].name, points: arr[j].points}
                arr2.push(obj2)
            }
        }
        //console.log(arr2)
        
        let max = Math.max(...arr2.map(o => o.points))
        //console.log(max)
        
        for (let k = 0; k < arr2.length; k++){
            if (arr[k].points == max){
                //console.log(arr[k].name)
                console.log("The Best Employee from", this.#name, "Division is", arr[k].name, "with", max, "Points")
            }
        }
 

        
    }
}

let empBadrun = new Employee("Badrun")
let empSusi = new Employee("Susi")
let empMakmur = new Employee("Makmur")

let divProject = new Division("Project")
let divFinance = new Division("Finance")

let pointPlusProject = new Point()
pointPlusProject.setPointDetail("Project OnTime", 100)
empBadrun.addPoint(pointPlusProject)
empMakmur.addPoint(pointPlusProject)

let pointPlusTarget = new Point()
pointPlusTarget.setPointDetail("Target Q1 Achieved", 50)
empSusi.addPoint(pointPlusTarget)

let pointPlusInovation = new Point()
pointPlusInovation.setPointDetail("Innovation for Team", 25)
empBadrun.addPoint(pointPlusInovation)
empSusi.addPoint(pointPlusInovation)

let pointMinusMistakes = new Point()
pointMinusMistakes.setPointDetail("Mistakes from team", -10)
empSusi.addPoint(pointMinusMistakes)
empMakmur.addPoint(pointMinusMistakes)

empBadrun.printHistoryPoints()
console.log("==============================")
empMakmur.printHistoryPoints()
console.log("==============================")
empSusi.printHistoryPoints()
console.log("==============================")

divProject.addEmployee(empBadrun)
divProject.addEmployee(empMakmur)
divFinance.addEmployee(empSusi)

divProject.getBestEmployee()
divFinance.getBestEmployee()
