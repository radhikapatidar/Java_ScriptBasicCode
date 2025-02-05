function missingNumInArray(arr1){
    const n = arr1.length +1;
    const sumOfFirstN = (n *(n+1))/2;

    let sumOfArray = 0;
    for(let i =0;i<n-1;i++){
       sumOfArray = sumOfArray +arr1[i];
    }
    let missingNumber = sumOfFirstN -sumOfArray;
    return missingNumber;
}

let arr1 = [1,2,5,4,6,8,7];
console.log("Missing number in array is",missingNumInArray(arr1));