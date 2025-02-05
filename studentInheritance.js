class person{
    constructor(name){
        this.firstName = name
    }

    msg(){
        console.log("This is Person class")
    }
}
class student extends person{
    constructor(n,roll_No){
        super(n);
        this.rollNumber = roll_No;
    }
    msg(){
        console.log("This is student class");
    }
    info(){
        this.msg();
        super.msg();
        console.log(this.firstName + " Roll no of student is" + this.rollNumber);
    }
}
let obj = new student("radhika",101);
console.log(obj);
console.log(obj.msg());
console.log(obj.info());

//For making private variable and function we use # and we need to defined that variable  