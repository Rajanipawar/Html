// var date=new Date("03/31/23");
// document.write(date);    

// document.getElementById("d1").innerHTML=date;

// var date1=new Date("31 March 02");
// document.getElementById("d1").innerHTML=date1;

// var date1=new Date();
// document.getElementById("d1").innerHTML=date1.getTime();
// document.getElementById("d1").innerHTML=date1.setDate(31);
// document.getElementById("d1").innerHTML=date1.getTime();
// console.log(date1.setDate(12));

// date1.setDate(6);
// document.write(date1,"<br>");
// date1.setFullYear(2030);
// document.write(date1,"<br>");
// date1.setHours(6);
// document.write(date1,"<br>");

let year=parseInt(prompt("Enter the year in YYYY Format"));
if(year%400==0 ||(year%100!=0 && year%4==0)){
    alert(year+" is leap year");
}
else{
    alert(year+ " is not leap year");
}

