// botones
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");


let btndestacados = document.querySelector(".destacados");
let btnfav = document.querySelector(".favoritos");
let btnmesa = document.querySelector(".juegosMesa");
let btncarreras = document.querySelector(".carreras");
let btnaventura = document.querySelector(".aventura")

// cards

let cardsdestacados = document.getElementById('destacados');
let cardsfav = document.getElementById("favoritos");
let cardsmesa = document.getElementById("juegosMesa");
let cardscarreras = document.getElementById("carreras");
let cardsaventura = document.getElementById("aventura");

let prevboolean = false;
let nextboolean = false;

const screen = document.body;
let i = 0;
prev.addEventListener("click", () => becometrue(1));
next.addEventListener("click", () => becometrue(2));

btndestacados.addEventListener("click",() => whicharrow(1));
btnfav.addEventListener("click",() => whicharrow(2));
btnmesa.addEventListener("click", () =>whicharrow(3));
btncarreras.addEventListener("click",() => whicharrow(4));
btncarreras.addEventListener("click",() => whicharrow(5));


function becometrue(num) {
    console.log(num)
    if(num == 1){
        prevboolean = true;
    }
    else if(num == 2){
        nextboolean = true;
    }
    console.log(nextboolean)
}

function whicharrow (e) {
    console.log(e)
    if(e = 1 ){
        if(prevboolean){
            moveLeft(cardsdestacados);
        }
        else if(nextboolean){
            moveRight(cardsdestacados);
        }
        
    }
    if(e = 2){
        if(prevboolean){
            moveLeft(cardsfav);
        }
        else if(nextboolean){
            moveRight(cardsfav);
        }
    }
    if(e = 3){
        if(prevboolean){
            moveLeft(cardsmesa);
        }
        else if(nextboolean){
            moveRight(cardsmesa);
        }
    }
    if(e = 4){
        if(prevboolean){
            moveLeft(cardscarreras);
        }
        else if(nextboolean){
            moveRight(cardscarreras);
        }
    }
    if(e = 5){
        if(prevboolean){
            moveLeft(cardsaventura);
        }
        else if(nextboolean){
            moveRight(cardsaventura);
        }
    }

}



function moveLeft(cards){
    let desktop = screensize();
        if((i != 0)&&(desktop == false)){
            i--;  
            cards.style.transform = `translateX(${-1 * (48 * i)}%)`
            
        }  

        if((i == 1)&&(desktop == true)){
            cards.setAttribute("style", "transform: translateX(25%)");
            i = 0;  
        }
        else if((i == 2)&&(desktop == true)){
            cards.setAttribute("style", "transform: translateX(-25%)");
            i = 1;
        }  
}

function moveRight(cards){
    let desktop = screensize();
    if((i != 5)&&(desktop == false)){
        i++;
        cards.style.transform = `translateX(${-1*(48 * i)}%)`;
    }

    if((i == 0)&&(desktop == true)){
        cards.style.transform = "translateX(-24.25%)";
        i = 1;
    }
    else if((i == 1)&&(desktop == true)){
        cards.style.transform = "translateX(-74%)";
        i = 2;
    }
}


function screensize() {
    return window.matchMedia("(min-width: 660px)").matches;
}

