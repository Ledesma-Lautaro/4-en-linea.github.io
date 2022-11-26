let cards = document.querySelectorAll(".cards-personajes");
let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
let card5 = document.querySelector("#card5");
let card6 = document.querySelector("#card6");
let card7 = document.querySelector("#card7");
const arrayCards = [];
arrayCards.push(card1, card2, card3, card4, card5, card6, card7);
let titles = document.querySelectorAll(".character-title");


// hay que ponerle a cada card un id, para llamarlo desde la funcion
//750 final
//600 mitad


window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY;
    if(scrolled > 500 && scrolled < 600){
    for (let index = 0; index < arrayCards .length; index++) {
        console.log(arrayCards);
        const card = arrayCards[index];
        setTimeout(function(){
            //en vez de card, va a tener que ser card 1, etc, dependiendo del id, para que se muestren
            //de manera individual
            card.setAttribute("style", 'animation: 1s linear '+ (0.25 * index) +'s forwards fade-up;'); 
            for (let i = 0; i < titles.length; i++) {
                const title = titles[i];
                title.setAttribute("style", 'animation: 1s linear 0.5s forwards first-fade-right;'); 
            }
        }, 1000);
    }
    }
    if(scrolled > 600 && scrolled < 750){
        for (let i = 0; i < titles.length; i++) {
            const title = titles[i];
            title.setAttribute("style", 'animation: 1s linear 0.5s forwards second-fade-right;'); 
        }
    }
    if(scrolled > 750){
        for (let i = 0; i < titles.length; i++) {
            const title = titles[i];
            title.setAttribute("style", 'animation: 1s linear 0.5s forwards third-fade-right;'); 
        }
    }
})
