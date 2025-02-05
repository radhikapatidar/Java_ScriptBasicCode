function lcm(a,b){
    let max = Math.max(a,b);

    while(true){
        if(max % a === 0 && max % b === 0){
            return max;
        }
        max++;
    }
}
let num1 = 4;
let num2 = 6;

console.log(`Lcm of ${num1} and ${num2} is`,lcm(num1,num2))