function add(){
    var value1=Number(document.getElementById("val1").value);
    var value2=Number(document.getElementById("val2").value);
    document.getElementById("result").innerHTML=`Addition of ${value1} & ${value2} is:`+(value1+value2);
}

function sub(){
    var value1=Number(document.getElementById("val1").value);
    var value2=Number(document.getElementById("val2").value);
    document.getElementById("result").innerHTML=value1-value2;
}

function mul(){
    var value1=Number(document.getElementById("val1").value);
    var value2=Number(document.getElementById("val2").value);
    document.getElementById("result").innerHTML=value1*value2;
}

function div(){
    var value1=Number(document.getElementById("val1").value);
    var value2=Number(document.getElementById("val2").value);
    document.getElementById("result").innerHTML=value1/value2;
}