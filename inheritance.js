function Creature(ls){
    this.lifeSpan = ls;
}

Creature.prototype.breath = function(){
    console.log("breathing...");
}

let Creature1 = new Creature(100);

console.log(Creature1);

function Persone(first,last,a){
    this.firstName = first,
    this.lastName = last,
    this.age = a;
}

Persone.prototype.fullName = function(){
    console.log(this.firstName + " " + this.lastName);
}
//NOw we want breath function In persone function so we use
//In these case Creature point to Persone object direactly intead of prsone protype
// Persone.prototype = Object.create(Creature.prototype);

Persone.prototype.__proto__ = Object.create(Creature.prototype);

let person1 = new Persone("radhi","patidar",21);
let person2 = new Persone("mini","gupta",23);

console.log(person1.breath());
console.log(person1.fullName());

console.log(person1);
console.log(person2);