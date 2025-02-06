function getRandom(min,max){
    let x = Math.floor(Math.random() *(max -min +1)) +min;
    return x;
}

console.log(getRandom(1,6));