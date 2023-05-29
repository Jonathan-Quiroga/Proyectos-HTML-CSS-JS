const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fullImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";

    fulImg.src = reference; // esto es para ligar la imagen src hace alucion al tipo de imagen 
}

function closeImg(){
    fulImgBox.style.display = "none";
}

