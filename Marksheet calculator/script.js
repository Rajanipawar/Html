function total(){
    var value1=Number(document.getElementById("phy").value);
    var value2=Number(document.getElementById("chem").value);
    var value3=Number(document.getElementById("math").value);
    total=value1+value2+value3;
    document.getElementById("btn1").innerHTML=total;
    // document.getElementById("grade").innerHTML=(total/300)*100;
    avg=total/3;
    percent=(total/300)*100;
    if(percent>=90 ){
        document.getElementById("grd").innerHTML="O";
    }
    else if(percent<90 && percent>=80) {
        document.getElementById("grd").innerHTML="A";
    }
    else if(percent<80 && percent>=70) {
        document.getElementById("grd").innerHTML="B";
    }
    else if(percent<70 && percent>=60) {
        document.getElementById("grd").innerHTML="C";
    }
    else if(percent<60 && percent>=50) {
        document.getElementById("grd").innerHTML="D";
    }
    else if(percent<50 && percent>=40) {
        document.getElementById("grd").innerHTML="P";
    }
    else  {
        document.getElementById("grd").innerHTML="F";
    }
}

// function percentage(){
//     avg=total/3;
//     percent=(total/300)*100;
//     if(percent>=90 ){
//         document.getElementById("grd").innerHTML="O";
//     }
//     else if(percent<90 && percent>=80) {
//         document.getElementById("grd").innerHTML="A";
//     }
//     else if(percent<80 && percent>=70) {
//         document.getElementById("grd").innerHTML="B";
//     }
//     else if(percent<70 && percent>=60) {
//         document.getElementById("grd").innerHTML="C";
//     }
//     else if(percent<60 && percent>=50) {
//         document.getElementById("grd").innerHTML="D";
//     }
//     else if(percent<50 && percent>=40) {
//         document.getElementById("grd").innerHTML="P";
//     }
//     else  {
//         document.getElementById("grd").innerHTML="F";
//     }
// }