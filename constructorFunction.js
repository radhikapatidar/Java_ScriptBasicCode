// In these case method is copy for every object and it is same  therefore we need prototype for connect method;
function constructorFunction(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.fullName = function(){
        console.log(this.firstName +" " + this.lastName);
    }
}
let p1 = new constructorFunction("rashi","gupta",23);
let p2 = new constructorFunction("ishi","sharma",24);

console.log(p1);
console.log(p2);

//Using Prototype
//In these case only property is copy not a method 
// Method is connect in Persone Prototype
//Means fullName method is persent in Persone prototype
//We keep only thoughs things in prototype which is some for all
//For example we keep age but it not same for all therefore we not keep property in prototype
function Person(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;

}

Person.prototype.fullName = function(){
    console.log(this.firstName +" " + this.lastName);
}

let person1 = new Person("rashi","gupta",23);
let person2 = new Person("ishi","sharma",24);

console.log(person1);
console.log(person2);

//In inhertaince we use Prototype
