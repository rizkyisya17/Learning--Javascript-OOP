class Project{
    #name
    #price

    constructor(name, price){
        //completed the code
        this.#name = name
        this.#price = price
    }

    get getPrice(){
        //completed the code
        return this.#price
    }

}

class Employee{
    #name
    #jobPosition
    #salary

    constructor(name, jobPosition, salary){
        this.#name = name
        this.#jobPosition = jobPosition
        this.#salary = salary
    }

    get getSalary(){
        return this.#salary
    }

    get getName(){
        return this.#name
    }
}


class Company{
    #name
    #location
    #companyCash
    #arrEmployee
    #arrProject
    #month

    constructor(name, location, companyCash){
        this.#name = name
        this.#location = location
        this.#companyCash = companyCash
        this.#arrEmployee = []
        this.#month = 0 //bulan berjalan di set ke bulan 0
        this.#arrProject = []
    }

    set setArrEmployee(objEmployee){
        this.#arrEmployee.push(objEmployee)
    }

    //menambahkan bulan berjalan sesuai parameter yang dimasukkan
    set setMonth(value){
        this.#month += value
        this.calculateCompanyCash()
    }

    getCompanyStatus(){
         console.log(this.#name + " sudah berdiri selama " + this.#month + " memiliki " + this.#arrEmployee.length + " orang karyawan dengan Cash sebesar Rp" + this.#companyCash)
    }

    //menghitung ulang cash yang dimiliki perusahaan sesuai dengan bulan berjalan saat ini
    //Perusahaan diharuskan membayar gaji bulanan semua karyawan sesuai dengan jumlah bulan berjalan
    calculateCompanyCash(){

        //menghitung semua total gaji karyawan
        let total = 0
        for(let employee of this.#arrEmployee){
            total += employee.getSalary
        }
        this.#companyCash -= total
        
    }
    
    calculateCompanyProfit(){
        //menghitung pemasukan dari project
        let profit = 0
        for(let project of this.#arrProject){
            profit += project.getPrice
        }
        this.#companyCash += profit
    }

    //Add project to company and add cash based on price of the project
    addProject(objProject){
        //completed the code
        this.#arrProject.push(objProject)
        this.calculateCompanyProfit()
    }

    //Keluarkan karyawan dari arrayEmployee berdasarkan nama yang dimasukan
    employeeResignByName(employeeName){
        //completed the code
        this.#arrEmployee.pop(employeeName)
    }
}

//Membuat perusahaan baru
let objCompany = new Company("PT Coding.ID", "Tangerang", 100000000);

//print status perusahaan
//objCompany.getCompanyStatus()

//Menambahkan karyawan
let objEmployeeBadrun = new Employee("Badrun", "Fullstack Developer", 5000000)
objCompany.setArrEmployee = objEmployeeBadrun

//Bulan pertama perusahaan berjalan
objCompany.setMonth = 1

//print status perusahaan
objCompany.getCompanyStatus()

let objEmployeeAni = new Employee("Ani", "Finance", 4500000)
objCompany.setArrEmployee = objEmployeeAni

let objEmployeeMurni = new Employee("Murni", "HR", 4500000)
objCompany.setArrEmployee = objEmployeeMurni

//Bulan kedua perusahaan berjalan
objCompany.setMonth = 1

//print status perusahaan
objCompany.getCompanyStatus()


//pada bulan kedua perusahan mendapatkan project pertama
let objProject1 = new Project("Website Company Profile", 10000000)
objCompany.addProject(objProject1)

//print status perusahaan
objCompany.getCompanyStatus()

//Perusahaan menambahkan 2 karyawan lagi
let objEmployeeTechLead = new Employee("Rey", "Tehcnical Lead", 15000000)
objCompany.setArrEmployee = objEmployeeTechLead

let objEmployeeQAEngineer = new Employee("Rosna", "QA Engineer", 5000000)
objCompany.setArrEmployee = objEmployeeQAEngineer

//Bulan ketiga perusahaan berjalan
objCompany.setMonth = 1

//print status perusahaan
objCompany.getCompanyStatus()

//1 orang karyawan resign pada bulan ke empat
objCompany.employeeResignByName("Badrun")

//Bulan keempat perusahaan berjalan
objCompany.setMonth = 1

//print status perusahaan
objCompany.getCompanyStatus()