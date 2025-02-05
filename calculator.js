function calculator(a,b,operator){
    let result;

    switch(operator){
        case '+':
            result =a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
            break;
        case '/':
            if(b !==0){
            result =a/b;
            }else{
                return "Error Divisible by zero";
            }
            break;
        default:
            return "Invalid operator";

    }
    return `Result : ${a} ${operator} ${b} = ${result}`;

}
let num1 = 20;
let num2 = 4;

console.log(calculator(num1, num2, '+')); 
console.log(calculator(num1, num2, '-')); 
console.log(calculator(num1, num2, '*')); 
console.log(calculator(num1, num2, '/')); 