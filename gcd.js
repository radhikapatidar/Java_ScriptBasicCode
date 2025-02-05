function gcd(a,b){
    let smaller = Math.min(a,b);
    let hcf = 1;

    for(let i = 1; i<= smaller;i++){
        if( a% i ===0 && b % i ===0){
            hcf = i;
        }
    }
    return hcf;
}
const num1 = 20;
const num2 = 12;

console.log("gcd of the give number is",gcd(num1,num2));

//--------------------------------------------------------------------//

function findGCD(x,y){
  let gcd;

  if(x === 0){
    gcd = y;
  } else if(y === 0){
    gcd = x;
  }else{
    while(x !== y){
        if(x >y){
            x-= y;
        }else{
            y-= x;
        }
    }
    return gcd = x;
  }
}
console.log("gcd of two number is",findGCD(4,5));