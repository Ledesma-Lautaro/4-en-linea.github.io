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
let FirstTitle = titles[1];



// hay que ponerle a cada card un id, para llamarlo desde la funcion
//750 final
//600 mitad

function checkForVisibility() {
    
    if (isElementInViewport(FirstTitle)) {
        titles.forEach(title => {
            title.classList.add("titleVisible"); 
        });
    } 
    else {
        titles.forEach(title => {
            title.classList.remove("titleVisible"); 
        });
    }
    };
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
  }

window.addEventListener('scroll', () =>{
    if(isElementInViewport(cards[1])){
    for (let index = 0; index < arrayCards .length; index++) {
        const card = arrayCards[index];
        setTimeout(function(){
            //en vez e card, va a tener que ser card 1, etc, dependiendo del id, para que se muestren
            //de manedra individual
            card.setAttribute("style", 'animation: 0.5s linear '+ (0.25 * index) +'s forwards fade-up;'); 
        }, 1000);
    }
}});

