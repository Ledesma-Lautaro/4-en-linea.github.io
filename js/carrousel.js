// botones
let prevbuttons = document.querySelectorAll(".prev");
let nextbuttons = document.querySelectorAll('.next');

//evento y funcion para mover el carrusel a la derecha
for (let a = 0; a < nextbuttons.length; a++) {
    let button = nextbuttons[a];
    button.addEventListener("click", ()=> {
        card = button.nextElementSibling
        if(screensize()){
            if(card.classList.contains("card1")){
                card.classList.remove("card1")
                card.classList.add("card2")
            }
            else if(card.classList.contains("card2")){
                card.classList.remove("card2")
                card.classList.add("card3")
            }
        }
        else{
           
                if(card.classList.contains("card1")){
                    card.classList.remove("card1")
                    card.classList.add("card2")
                }
                else if(card.classList.contains("card2")){
                    card.classList.remove("card2")
                    card.classList.add("card3")
                }
                else if(card.classList.contains("card3")){
                    card.classList.remove("card3")
                    card.classList.add("card4")
                }
                else if(card.classList.contains("card4")){
                    card.classList.remove("card4")
                    card.classList.add("card5")
                }
        }
    }
    );
}

//evento y funcion para mover el carrusel a la izquierda
for (let a = 0; a < prevbuttons.length; a++) {
    let button = prevbuttons[a];
    button.addEventListener("click", ()=> {
            nextbutton = button.nextElementSibling;
            card = nextbutton.nextElementSibling;
        if(screensize()){
            if(card.classList.contains("card2")){
                card.classList.remove("card2")
                card.classList.add("card1")
            }
            else if(card.classList.contains("card3")){
                card.classList.remove("card3")
                card.classList.add("card2")
            }
        }
        else{
            if(card.classList.contains("card2")){
                card.classList.remove("card2")
                card.classList.add("card1")
            }
            else if(card.classList.contains("card3")){
                card.classList.remove("card3")
                card.classList.add("card2")
            }
            else if(card.classList.contains("card4")){
                card.classList.remove("card4")
                card.classList.add("card3")
            }
            else if(card.classList.contains("card5")){
                card.classList.remove("card5")
                card.classList.add("card4")
            }
        }
    }
    );
}

function screensize() {
    return window.matchMedia("(min-width: 660px)").matches;
}

