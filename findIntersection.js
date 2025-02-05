function findIntersection(arr1,arr2){
    let intersection = [];

    for(let i = 0;i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            if(arr1[i] === arr2[j] && !intersection.includes(arr1[i])){
                intersection.push(arr1[i]);
            }
        }
    }
    return intersection;
}

const array1 = [1,3,2,5,4,2,4,5,4];
const array2 = [5,4,3,5,6,2,1,7];
console.log(findIntersection(array1,array2));

// const result = array1.filter(item => array2.includes(item));
// console.log(result);