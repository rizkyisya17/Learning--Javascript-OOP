class Employee{
    name
    jobPosition
    salary

    constructor(name, jobPosition, salary){
        this.name = name
        this.jobPosition = jobPosition
        this.salary = salary
    }

    get getSalary(){
        return this.salary
    }
}

class Company{
    #name
    #location
    #companyCash
    #arrEmployee
    #month

    constructor(name, location, companyCash){
        //Complete code here
        this.#name = name
        this.#location = location
        this.#companyCash = companyCash
        this.#arrEmployee = []
        this.#month = 0 //bulan berjalan di set ke bulan 0
    }

    //tambahkan 1 object employee ke dalam attribute array employee
    set setArrEmployee(objEmployee){
        //Complete code here
        this.#arrEmployee.push(objEmployee)

    }

    //menambahkan bulan berjalan sesuai parameter yang dimasukkan
    set setMonth(value){
        this.#month += value

    }

    /*
        Print status company (ubah isi dari console.log dan sesuaikan dengan expected output)
        Menghasilkan 1x print status perusahaan contoh : PT Coding.ID sudah berdiri selama 0 memiliki 0 orang karyawan dengan Cash sebesar Rp100000000
    */
    getCompanyStatus(){
        //Complete code here
       console.log(this.#name + " sudah berdiri selama " + this.#month + " memiliki " + this.#arrEmployee.length + " orang karyawan dengan Cash sebesar Rp" + this.#companyCash  )
       
        
        
    }

    //menghitung ulang cash yang dimiliki perusahaan sesuai dengan bulan berjalan saat ini
    //Perusahaan diharuskan membayar gaji bulanan semua karyawan sesuai dengan jumlah bulan berjalan
    calculateCompanyCash(){
        
        //Complete code here
        
        let sum = 0;
        this.#arrEmployee.forEach(element => {
          sum += element.salary;
        });
        
        this.#companyCash -= sum
    }
}

//Membuat perusahaan baru
let objCompany = new Company("PT Coding.ID", "Tangerang", 100000000);

//print status perusahaan
objCompany.getCompanyStatus()

//Menambahkan 1 karyawan
let objEmployeeBadrun = new Employee("Badrun", "Fullstack Developer", 5000000)
objCompany.setArrEmployee = objEmployeeBadrun

//Bulan pertama perusahaan berjalan
objCompany.setMonth = 1
objCompany.calculateCompanyCash()
//objCompany.calculateCompanyCash = 5000000



//print status perusahaan
objCompany.getCompanyStatus()

//Menambahkan 2 karyawan lagi
let objEmployeeAni = new Employee("Ani", "Finance", 4500000)
objCompany.setArrEmployee = objEmployeeAni

let objEmployeeMurni = new Employee("Murni", "HR", 4500000)
objCompany.setArrEmployee = objEmployeeMurni

//Bulan kedua perusahaan berjalan
objCompany.setMonth = 1
objCompany.calculateCompanyCash()
//objCompany.calculateCompanyCash = 4500000+4500000+5000000

//print status perusahaan
objCompany.getCompanyStatus()