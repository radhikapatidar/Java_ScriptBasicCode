function sortArray(arr){
    let n  = arr.length;
    for(let i = 0 ;i< n;i++){
        for(let j = i+1;j<n;j++){
            if(arr[i] >= arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return array;
    
}
let array = [2,1,3,1,67,34,5];
console.log("sorted array",sortArray(array));