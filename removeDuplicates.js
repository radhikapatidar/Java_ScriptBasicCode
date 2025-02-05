function removeDuplicate(){
    let array = [1,2,3,3,4,5,5,6,7];

    let set = new Set(array);

    return[...set];
}
console.log("Remove Duplicate",removeDuplicate());

//----------------------------------------------------------------//

function removeRepeated(array){
    let uniqueArray =[];

    for(let i =0;i<array.length;i++){
        if(!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;

}
let array1 = [1,2,5,7,5,8,60,45,60];
console.log("NO Reaptead value",removeRepeated(array1));

