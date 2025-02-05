const sumFromOneToN = (num) =>{
    let sum = 0;
    while(num!=0){
       sum = sum+num;
       num--;
    }
    console.log("Sum up to N terms",sum);
}
sumFromOneToN(10);

//------------------------------------------------------------------------//

function sumUpToN(n){
   return (n *(n+1))/2;
}
let num = 10;
console.log("Sum Up to N terms",sumUpToN(num));