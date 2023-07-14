class Course{
    name
    sks
    score

    constructor(name, sks, score){
        //completed the code
        this.name = name
        this.sks = sks
        this.score = score
    }

    get getName(){
        return this.name;
    }
    
    set setName(value){
        this.name = value;
    }
    
    get getSks(){
        return this.sks;
    }
    
    set setSks(value){
        this.sks = value;
    }
    
    get getScore(){
        return this.score;
    }
    
    set setScore(value){
        this.score = value;
    }
    
    
    getGrade(){
        // Completed the code
        /*
         * Method getGrade called to return grade from score with rule below
         * score >= 85 => return "A"
         * score >= 70 => return "B"
         * score >= 55 => return "C"
         * score < 55 => return "D"
         */
        if (this.getScore >= 85){
            return "A"
        }
        else if (this.getScore >= 70){
            return "B"
        }
        else if (this.getScore >= 55){
            return "C"
        }
        else {
            return "D"
        }
        return "";
    }
}

class Student{
    #name
    #totalSKS
    #pass
    #listCourse

    constructor(name){
        this.#name = name
        this.#listCourse = []
    }

    get getName(){
        return this.#name
    }
    
    set setName(value){
        this.#name = value
    }
    
    set setListCourse(objCourse){
        this.#listCourse.push(objCourse);
    }
    
    get getListCourse (){
        return this.#listCourse;
    }
    
    countTotalSks(){
        // Completed the code
        /*
         * Method countTotalSKS return total SKS from the student
         */
        let total = 0
        for(let student of this.#listCourse){
            total += student.getSks
        }
        return total;
    }
    
}


class University{
    #name
    #obj_student
    
    

    constructor(name){
        this.#name = name
        //this.#couse= []
        //this.#student = []
    }

    get getObj_student(){
        return this.#obj_student
    }

    set setObj_student(objStudent){
        this.#obj_student = objStudent;
    }
    

    studentStatus(){
         // Completed the code
        /*
         * Method studentStatus return status of the student with this condition
         * - If total SKS < 10 then show
         * "[Student Name] Credit is not enough to graduate"
         * - If the student has at least one Course with grade D, then show
         * "Sorry, [Student Name] Not Pass"
         * - If the student passed 2 rules above, then show
         * "Congrats, [Student Name] Pass"
         */
         
         let Pass = true
         for (let i = 0; i < this.#obj_student.getListCourse.length; i++){
             if (this.#obj_student.getListCourse[i].getGrade() == "D"){
                 Pass = false;
                 break;
             }
             
         }
         
        
         console.log("CodingID Learning Center Information :")
         if (this.#obj_student.countTotalSks() < 10){
            console.log(this.#obj_student.getName + " Credit is not enough to graduate")
         }
         else if(Pass == false){
            console.log("Sorry, "+ this.#obj_student.getName + " Not Pass")
         }
         else{
            console.log("Congrats, " + this.#obj_student.getName + " Pass")
         }
         
        //console.log("Your output here")
    }

  
}

let Course1 = new Course("Programming", 2, 50);
let Course2 = new Course("Database", 4, 50);
let Course3 = new Course("Algoritma", 3, 80);
let Bill = new Student("Bill");

Bill.setListCourse = Course1;
Bill.setListCourse = Course2;
Bill.setListCourse = Course3;

let Univ = new University("CodingID Learning Center");
Univ.setObj_student = Bill;
Univ.studentStatus();

let Course11 = new Course("Programming", 3, 70);
let Course22 = new Course("Database", 3, 90);
let Course33 = new Course("Algoritma", 4, 50);
let Jonathan = new Student("Jonathan");
Jonathan.setListCourse = Course11;
Jonathan.setListCourse = Course22;
Jonathan.setListCourse = Course33;

let Univ1 = new University("CodingID Learning Center");
Univ1.setObj_student = Jonathan;
Univ1.studentStatus();

let Course111 = new Course("Programming", 4, 70);
let Course222 = new Course("Database", 4, 60);
let Course333 = new Course("Algoritma", 4, 60);
let Wardoyo = new Student("Wardoyo");
Wardoyo.setListCourse = Course111;
Wardoyo.setListCourse = Course222;
Wardoyo.setListCourse = Course333;

let Univ2 = new University("CodingID Learning Center");
Univ2.setObj_student = Wardoyo;
Univ2.studentStatus();