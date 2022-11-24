let cards = document.querySelectorAll(".cards-personajes");
// hay que ponerle a cada card un id, para llamarlo desde la funcion


window.addEventListener('scroll', () =>{
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        setTimeout(function(){
            //en vez de card, va a tener que ser card 1, etc, dependiendo del id, para que se muestren
            //de manera individual
            card.setAttribute("style", "animation: 1.5s linear 0.5s forwards fade-up;"); 
        }, 1000);
    }
})
