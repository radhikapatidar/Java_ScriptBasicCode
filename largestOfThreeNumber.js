function largestOfThreeNumber(a,b,c){

  if(a >b && a >c){
    return a;
  }
  else if(b>a && b >c){
    return b;
  }
  else{
    return c;
  }
}
let a = 340; b=53; c = 200;
console.log(`largest Number between ${a}, ${b}, ${c}  is --->`,largestOfThreeNumber(a,b,c));

//------------------------------------Using Math.max---------------------------------------------

function findLargest(){
    let x= 10;y = 54; z =23;

    console.log("Largest Number",Math.max(x,y,z));
}
findLargest();