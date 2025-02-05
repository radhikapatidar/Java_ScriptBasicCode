function fibonacci(N){
    let a = 0,b = 1;
    for(let i = 1 ;i<= N;i++){
    console.log(a);
    c =a+b;
    a = b;
    b = c;
    }
}
fibonacci(4);

