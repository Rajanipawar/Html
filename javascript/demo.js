// var a=2, b='Rajani', c=[1,2,3,4,5,'Rajani'], d={'id':101}, e=true, f;
// // document.write(a,b);
// // console.log(a," ", b);
// // window.alert("This is alert message box")

// document.getElementById("p2").innerHTML="Hello World!";
// // var msg=document.getElementById("p1");
// // console.log(msg);

// console.log(typeof(f));

// var p=6, q=8;
// var c=5, d=6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a**b);
// console.log(a%b);
// console.log(a<b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a!=b);
// console.log(a>b && b>a);
// console.log(a||b);
// console.log(!p>q);
// console.log(p==q);
// console.log(p===q);

// document.getElementById("p1").innerHTML="Addition Of p & q:"+(p+q);
// document.getElementById("p1").innerHTML="Substraction Of p & q:"+(p-q);
// document.getElementById("p1").innerHTML="Multiplication Of p & q:"+(p*q);
// document.getElementById("p1").innerHTML="Division Of p & q:"+(p/q);
// document.getElementById("p1").innerHTML="Power Of p & q:"+(p%q);
// document.getElementById("p1").innerHTML="Mod Of p & q:"+(p**q);
// document.getElementById("p1").innerHTML="AND Of p & q:"+(p<q);
// document.getElementById("p1").innerHTML="OR Of p & q:"+(p>=q);
// document.getElementById("p1").innerHTML="Comparison Of p & q:"+(p==q);


// if(p<q){
//     document.getElementById("p1").innerHTML="true"
// }
// else{
//     document.getElementById("p1").innerHTML="false"
// }

// switch case statement 

var a=Number(prompt("Enter The first value"));
var b=Number(prompt("Enter The second value"));
var choice=prompt("Enter your choice");

switch(choice){
    case "+":{
        var c=a+b;
        document.getElementById("p1").innerHTML=c;
        break;
    }
    case "-":{
        var c=a-b;
        document.getElementById("p1").innerHTML=c;
        break;
    }
    case "-":{
        var c=a*b;
        document.getElementById("p1").innerHTML=c;
        break;
    }
    case "-":{
        var c=a/b;
        document.getElementById("p1").innerHTML=c;
        break;
    }
    default:{
        document.getElementById("p1")="Invalid Choice";
    }
}


