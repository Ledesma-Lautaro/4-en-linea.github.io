let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let cards = document.querySelector(".cards");
let i = 0;
console.log(i);
prev.addEventListener("click", moveLeft);
next.addEventListener("click", moveRight);
function moveLeft(){
    console.log(i);
        if(i == 1){
            cards.setAttribute("style", "transform: translateX(25%)");
            i = 0;  
        }
        else if(i == 2){
            cards.setAttribute("style", "transform: translateX(-25%)");
            i = 1;
        }  
}

function moveRight(){
    console.log(i);
    if(i == 0){
        console.log("pasa por el if right");
        cards.style.transform = "translateX(-25%)";
        i = 1;
    }
    else if(i == 1){
        console.log("pasa al else if right");
        cards.setAttribute("style", "transform: translateX(-75%)");
        i = 2;
        
         }
}