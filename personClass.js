class person{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    setName(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
    
    setAge(age){
        if(age >= 0){
            this._age = age;
        }else{
            console.log("Invalied age.Age must be non-negative");
        }
    }

    getAge(){
        return this._age;
    }
}

const person1 = new person("Shreem",21);
console.log("Name",person1.getName());
console.log("Age",person1.getAge());