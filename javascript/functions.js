function greet(){
//     console.log("Hello World!");
    return "Hello!"
}
console.log(greet());
// greet();

function ads(){
    var a=2, b=4;
    return a+b;
}
console.log(ads());

function add(a,b){
    return a+b;
}
console.log(add("Rajani ","Pawar"));

var add1=function(){
    var a=4, b=5;
    console.log(a+b);
}
add1();

var add1=function(){
    var a=10, b=5;
    return a+b;
}
console.log(add1());

var mul=()=>{
    var a=8,b=5;
    return a*b;
}
console.log(mul());


var add2=(p,q,r="")=>{
    return p+q+r;
}
console.log(add2(4,6));
console.log(add2(4,6,7));

var add3=(...ad)=>{
    return ad;
}
// console.log(add3(1+2+3+5+4+6+7+8+9+10));
console.log(add3("Rajani ","Shantaram ", "Pawar"));