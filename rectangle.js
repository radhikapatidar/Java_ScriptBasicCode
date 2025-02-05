class rectangle{

    constructor(w,h){
        this.width = w;
        this.height = h;
    }

    calculateArea(){
        return this.width * this.height;
    }

    calculatePerimeter(){
        return 2 *(this.width + this.height);
    }
}

obj = new rectangle(20,30);
console.log("Area of reactangle",obj.calculateArea());
console.log("perimeter of reactangle",obj.calculatePerimeter());