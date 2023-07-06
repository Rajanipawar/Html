function colorfill(){
    var colour1=document.getElementById("clr1").value;
    var colour2=document.getElementById("clr2").value;
    document.getElementById("bx").style.backgroundColor=colour1;
    document.getElementById("txt").style.color=colour2;
}


function calculate(){
    var num1=parseInt(document.getElementById("val1").value);
    var num2=parseInt(document.getElementById("val2").value);
    var oper=document.getElementById("optr").value;
}

    switch(oper){
        case "+":{
            document.getElementById("res").innerHTML=num1+num2;
            break;
        }
        case "-":{
            document.getElementById("res").innerHTML=num1-num2;
            break;
        }
        case "*":{
            document.getElementById("res").innerHTML=num1*num2;
            break;
        }
        case "/":{
            document.getElementById("res").innerHTML=num1/num2;
            break;
        }
        case "%":{
            document.getElementById("res").innerHTML=num1%num2;
            break;
        }
        case "**":{
            document.getElementById("res").innerHTML=num1**num2;
            break;
        }
    }