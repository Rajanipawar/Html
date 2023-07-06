class calculate{
    constructor(num1,num2){
        this.value1=num1;
        this.value2=num2;
    }
    addition(){
        return this.value1+this.value2;
    }
}
class operation extends calculate{
    constructor(num1,num2){
        super(num1,num2);
        this.no1=num1;
        this.no2=num2;
    }
    show(){
        return `Addition of ${this.no1} & ${this.no2} is ${this.addition()}`;
    }
}
let sum=new operation(10,20);
console.log(sum.show());