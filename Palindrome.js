function palindrome(str){
    let j = str.length - 1;
    for(let i = 0; i<str.length/2;i++){
        if(str[i] != str[j]){
            return false;
        }
        j--;    
    }
    return true;
}
let string1 = "MadaM";
console.log(`Give string ${string1}  `,palindrome(string1));

//--------------------------------------------------------------------//

function palindrome2(string){
    let rev = "";
    for(let i = string.length-1 ; i>=0;i--){
        rev = rev+ string.charAt(i);
    }
    if(string == rev){
        return true;
    }else{
        return false;
    }
}
let string = "radhika";
console.log(`given string ${string} is `,palindrome2(string));

//----------------------------------------------------------//

const palindrome3 = (str3) =>{
    let rev = str3.split("").reverse().join("");

    if(str3 == rev){
        return true;
    }else{
        return false;
    }
}
let str3 = "MadaM"
console.log(palindrome3(str3));