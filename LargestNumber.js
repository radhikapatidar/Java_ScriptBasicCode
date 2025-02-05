let arr = [12,34,2,76,34,2,4];

let max = arr[0];

for(var i =1 ;i<arr.length;i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log("Largest Number is",max);

console.log(Math.max(...arr));
