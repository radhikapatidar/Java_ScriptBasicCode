function evenOrOdd(n){
  if(n%2 === 0){
    console.log(`Give Number ${n} is Even`);
  }else{
    console.log(`Give Number ${n} is Odd`);
  }
}
evenOrOdd(5);

//---------------------------------------------------------//
function checkEvenOdd(number){
    console.log(number + " is " +((number % 2 === 0) ? "Even" :"Odd"));

}
let num = 8;
checkEvenOdd(num);
