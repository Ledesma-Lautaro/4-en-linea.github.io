var percentage = document.querySelector(".percentage");
let body = document.body
window.addEventListener("load", progressTime);
let contador = 0;
body.setAttribute("style", "overflow: hidden");
function progressTime() {
     timeset = setInterval(progressNumber, 50);
}


function progressNumber() {
    
    if (contador < 100) {
        contador++;
        percentage.innerHTML = contador + "%";
        body.setAttribute("style", "overflow: hidden");
    }
    else{
        clearInterval(timeset);
        body.setAttribute("style", "overflow: visible");
    }
}