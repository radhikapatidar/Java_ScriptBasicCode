function swap(a,b){
  console.log(`Before Swap value of a is ${a} and value of b is ${b}`)
    let c = a;
      a = b;
      b = c;
    console.log(`After Swap value of a is ${a} and value of b is ${b}`)
}
let a = 20;
let b = 30;
swap(a,b);

//--------------------------------------------------------------------------//
function swap1(){
    let x = 45;
    let y = 60;

 console.log(`Before swap value of x is ${x} and value of y is ${y}`);
    x = x+y;
    y = x-y;
    x = x-y;
console.log(`After swap value of x is ${x} and value of y is ${y}`);

}
