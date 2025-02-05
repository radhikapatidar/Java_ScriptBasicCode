const numVowels =(n) =>{
    const vowels = "aeiouAEIOU";
    let count = 0;

    for(let i = 0;i< n.length;i++){
        if(vowels.includes(n.charAt(i))){
            count++;
        }
    }
    return count;

}

let str = "Hello WOrld";
console.log("number of vowels",numVowels(str));

