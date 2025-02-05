let a =5;
let flag = true;
function primeNumber(){
    for(let  i = 2 ;i<a/2;i++){
        if(a%i ==0){
            flag = false;
            break
        }
    }
    if(flag){
        console.log(`Give number ${a} is Prime number`)
    }
    else{
        console.log(`Give number ${a} is not Prime Number`);
    }
}
primeNumber();

//--------------------------Prime number from 1 to n -----------------


function isPrime(n){
    if(n==0|| n==1){
        return false;
    }

    for(let i = 2;i< n;i++){
        if(n % i == 0){
            return false;
        }
      }
      return true;


}
var N = 100;
var result = [];

for(let i = 1;i<= N;i++){
    if(isPrime(i)){
        result.push(i);
    }
}
console.log(result.join(' '));