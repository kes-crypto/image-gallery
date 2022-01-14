var fullImg = document.getElementById("fullImg");
var box = document.getElementById('box');

function openfullImg(pic){
    box.style.display = "flex";
    fullImg.src = pic;
}
function closefullImg(){
    box.style.display = "none";
}