var percentage = document.querySelector(".percentage");
window.addEventListener("load", progressTime);
let contador = 0;
function progressTime() {
     timeset = setInterval(progressNumber, 50);
}


function progressNumber() {
    
    if (contador < 100) {
        contador++;
        percentage.innerHTML = contador + "%";
    }
    else{
        clearInterval(timeset);
    }
}