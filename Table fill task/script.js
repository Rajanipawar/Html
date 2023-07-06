function colorfill(){
    var colour1=document.getElementById("clr1").value;
    var block=document.getElementById("bx").value;
    
    switch(block){
        case "1":{
            document.getElementById("bx1").style.backgroundColor=colour1;
            break;
        }
        case "2":{
            document.getElementById("bx2").style.backgroundColor=colour1;
            break;
        }
        case "3":{
            document.getElementById("bx3").style.backgroundColor=colour1;
            break;
        }
        case "4":{
            document.getElementById("bx4").style.backgroundColor=colour1;
            break;
        }
        case "5":{
            document.getElementById("bx5").style.backgroundColor=colour1;
            break;
        }
        case "6":{
            document.getElementById("bx6").style.backgroundColor=colour1;
            break;
        }
        case "7":{
            document.getElementById("bx7").style.backgroundColor=colour1;
            break;
        }
        case "8":{
            document.getElementById("bx8").style.backgroundColor=colour1;
            break;
        }
        case "9":{
            document.getElementById("bx9").style.backgroundColor=colour1;
            break;
        }
        default:{
            alert("Invalid Choice");
        }
    }
}


