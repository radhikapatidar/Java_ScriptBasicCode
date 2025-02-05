function commanElementBetweenArray(){
    let arr1 = [12,4,56,3,87,3];
    let arr2 = [12,454,67,35,87,3,87];
    let arr3 = [],k=0;
        for(let i =0 ;i<arr1.length;i++){
             for(let j = 0; j<arr2.length;j++){
                if(arr1[i] == arr2[j]){
                    if(!arr3.includes(arr1[i])){
                    arr3[k] =arr1[i];
                    k++;
                    }
                }
             }
    }
    return arr3;
}
console.log(commanElementBetweenArray());

//--------------------------------------------------------------//

function findCommanElement(arr1,arr2){
   let set1 = new Set(arr1);
   let comman = new Set(arr2.filter(element =>set1.has(element)));

   //convert set back into array
   return[...comman];
}

let arr1 = [1,2,3,3,4,5,6,6];
let arr2 = [17,5,4,2,2,1];
console.log(findCommanElement(arr1,arr2));