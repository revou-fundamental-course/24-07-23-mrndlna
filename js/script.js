//Dinamic view
    let popUpName = prompt("Silahkan masukan nama kamu...");
    document.getElementById("nnama").innerText = popUpName;

//Auto slide gambar
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
   showDivs(slideIndex += n); 
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("slider");
    if(n > imgList.length) {slideIndex = 1}
    if(n < 1) {slideIndex = imgList.length}

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 2000)

//Mengisi Form Data Diri
function validateForm() {
    const formName = document.getElementById("fname").value;
    const Email = document.getElementById("femail").value;
    const interest = document.getElementById("finterest").value;

    if (formName == "" || Email == "" ) {
        alert("Mohon Isi Biodata Anda Agar Marketing Kami Dapat Menghubungi")
        return false;
    }
}

//