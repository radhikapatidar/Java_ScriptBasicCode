function reverseString(){
    let name = "Radhika";
    let rev = "";

    for(let i =name.length-1;i>=0;i--){
       rev = rev+name.charAt(i);
    }
    console.log("Reverse of String is---->",rev);
}
reverseString();

//------------Using Revers method----------------------------------
//  ❌ Cons: Doesn't work correctly with surrogate pairs (like emojis, special Unicode characters).
//

function reverseString1(){
    let name = "Shreem";
    console.log(name.split("").reverse().join(""));
}
reverseString1();

//------------------Using From Support emoji -----------------------------
function reverseString2(){
    let name = "Radhi";
    console.log(Array.from(name).reverse().join(""));
}
reverseString2();









