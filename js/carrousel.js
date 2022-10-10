let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let cards = document.querySelector(".cards");
let mobilebutton = document.querySelector(".mobile");
const screen = document.body;
let i = 0;
console.log(i);
prev.addEventListener("click", moveLeft);
next.addEventListener("click", moveRight);






function moveLeft(){
    let desktop = screensize();
    console.log(i, desktop);
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

function moveRight(){
    let desktop = screensize();
    console.log(desktop);
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

