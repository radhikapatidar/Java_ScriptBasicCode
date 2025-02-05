function factorial(n){
    fact = 1;
    while(n!=0){
        fact = fact *(n);
        n--;
    }
    return fact;
}
console.log("factorial is",factorial(5));