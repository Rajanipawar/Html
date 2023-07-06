const image1=document.getElementById("ig");
const btnval=document.getElementById("butn");
const images=["../images/bulboff.jpg","../images/bulbon1.jpg"];
const btnar=["On","Off"];
let cindex=1;
let btnvl=1;

function changeImg(){
    if(cindex>=images.length && btnvl>=btnar.length){
        cindex=0;
        btnvl=0;
    }
    image1.src=images[cindex];
    cindex++;
    btnval.value=btnar[btnvl];
    btnvl++;
}
