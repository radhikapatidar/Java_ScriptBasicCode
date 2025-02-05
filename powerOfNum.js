function powerOfNum(base,exponent){
   let power = 1
    while(exponent!=0){
       power =  power*base;
       exponent--;
    }
    return power
}
let base = 8;
let exponent = 3;
console.log(`${base} power ${exponent} is`,(powerOfNum(base,exponent)));

console.log("using power method",Math.pow(base,exponent));