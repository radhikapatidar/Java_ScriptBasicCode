class methodOverloading{
     describe(){
        console.log("I am a polygon");
     }

     calculateArea(sideA,sideB){
        console.log(sideA* sideB);
     }

     calculateArea(side){
        console.log(side*side);
     }
}
rectangle = new methodOverloading();
rectangle.calculateArea(5,7);//35 but it give 25 becouse we overload the method

square = new methodOverloading();
square.calculateArea(6);

//-------------------------------------------------------------------------------//
class Calculator {
    calculate(...args) {
        if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            return args[0] * args[1]; 
        } else if (args.length === 1 && Array.isArray(args[0])) {
            return args[0].reduce((sum, num) => sum + num, 0); 
        } else {
            return 'Invalid input';
        }
    }
}

const calc = new Calculator();
console.log(calc.calculate(5, 10));      
console.log(calc.calculate(["jjjj",1, 2, 3, 4])); 
console.log(calc.calculate('Hello', 5));  
