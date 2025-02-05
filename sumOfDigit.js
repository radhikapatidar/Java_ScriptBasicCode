function sumOfDigit(number){
   let sum = 0;
   while(number>0){
    let n  = number %10;
    sum = sum + n;
    number = Math.floor(number / 10);   
 }
   return sum;
}

let digit = 355;
console.log(`Sum of digits ${digit} is`,sumOfDigit(digit));