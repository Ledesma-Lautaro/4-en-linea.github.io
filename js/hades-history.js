let buttons = document.querySelectorAll(".hades-button");
let card = document.querySelector(".history-container");
let imgc1 = document.querySelector(".history-img");
let imgc2 = document.querySelector(".weapon-hades-img");
let imgc3 = document.querySelector(".hades-guantes");
let imgtextc3 = document.querySelector(".weapons-img");
let txtc1 = document.querySelector(".text-container");
let txtc2 = document.querySelector(".weapon-text");
let txtc3= document.querySelector(".bendiciones-text");
let titlec1 = document.querySelector("#history-title");
let titlec2 = document.querySelector(".weapon-title");
let titlec3 = document.querySelector(".bendiciones-title");
// bendiciones card 3
let bc1 = document.querySelector(".first-line");
let bc2 = document.querySelector(".second-line");
//cards de hades, del "slider", son card-hades 1 2 y 3
document.addEventListener("DOMContentLoaded", function(){
    imgc1.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-up;");
    txtc1.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-right;");
    titlec1.setAttribute("style", "animation: 2s linear 1s forwards fade;");
});
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", ()=> {
        if ((i == 0)&&(!card.classList.contains("card-hades1"))) {
            //animacion para que se vaya por la izq
            card.setAttribute("style", "animation: 0.5s linear 0s forwards slideout;");
            setTimeout(function(){
                //timeout para que se termine de completar la animacion anterior
                card.classList.remove("card-hades2");
                card.classList.remove("card-hades3");
                card.classList.add("card-hades1");
                //despues de cambiar tarjetas, añado las animaciones a todos los elementos correspondientes
                card.setAttribute("style", "animation: 0.5s linear 0s forwards slidein;");
                imgc1.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-up;");
                txtc1.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-right;");
                titlec1.setAttribute("style", "animation: 2s linear 1s forwards fade;");
            }, 500);

        }
        
        else if ((i == 1)&&(!card.classList.contains("card-hades2"))) {
            card.setAttribute("style", "animation: 0.5s linear 0s forwards slideout;");
            setTimeout(function(){
                card.classList.remove("card-hades1");
                card.classList.remove("card-hades3");
                card.classList.add("card-hades2");
                card.setAttribute("style", "animation: 0.5s linear 0s forwards slidein;");
                imgc2.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-up;");
                txtc2.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-left;");
                titlec2.setAttribute("style", "animation: 2s linear 1.5s forwards fade;");
                imgtextc3.setAttribute("style", "animation: 1s linear 0.5s forwards fade-left;");
            }, 500);
        }
        
        else if ((i == 2)&&(!card.classList.contains("card-hades3"))) {
            card.setAttribute("style", "animation: 0.5s linear 0s forwards slideout;");
            setTimeout(function(){
                card.classList.remove("card-hades1");
                card.classList.remove("card-hades2");
                card.classList.add("card-hades3");
                card.setAttribute("style", "animation: 0.5s linear 0s forwards slidein;");
                imgc3.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-up;");
                txtc3.setAttribute("style", "animation: 0.5s linear 0.5s forwards fade-right;");
                titlec3.setAttribute("style", "animation: 2s linear 2s forwards fade;");
                bc1.setAttribute("style", "animation: 0.5s linear 1s forwards fade-right;");
                bc2.setAttribute("style", "animation: 0.5s linear 1.5s forwards fade-right;");
            }, 500);



        }
})
}