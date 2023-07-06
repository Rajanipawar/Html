function validate(){
    var namepattern="[a-zA-Z]{3,20}";
    var fname=document.getElementById("fn").value;
    
    if(fname==""){
        alert("Please enter the name");
        document.getElementById("fn").focus();
        return false;
    }

    if(!fname.match(namepattern)){
        alert("First name contain only capital & small alphabets with minimum")
        document.getElementById("fn").focus();
        return false;
    }
}