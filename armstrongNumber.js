function armstrongNumber(number){
   let cube = number;
   let sum = 0;
   while(number != 0){
    let remider = number % 10;
    sum = sum + (remider * remider * remider);
    number = Math.floor(number /10);
   }
   if(cube === sum){
    console.log(`${cube} is armstrongNumber`);
   }else{
    console.log(`${cube} not a armstrongNumber`);
   }
}
armstrongNumber(370);