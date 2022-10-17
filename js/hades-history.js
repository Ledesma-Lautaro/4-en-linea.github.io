let buttons = document.querySelectorAll(".hades-button");
let card = document.querySelector(".history-container");

//cards de hades, del "slider", son card-hades 1 2 y 3

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", ()=> {
        if ((i == 0)&&(!card.classList.contains("card-hades1"))) {
            card.classList.add("slideout");
            card.classList.remove("card-hades2");
            card.classList.remove("card-hades3");
            card.classList.add("card-hades1");
            card.classList.add("slidein");
            card.classList.remove("slideout");
        }
        
        else if ((i == 1)&&(!card.classList.contains("card-hades2"))) {
            card.classList.add("slideout");
            card.classList.remove("card-hades1");
            card.classList.remove("card-hades3");
            card.classList.add("card-hades2");
            card.classList.add("slidein");
            
            card.classList.remove("slideout");  
        }
        
        else if ((i == 2)&&(!card.classList.contains("card-hades3"))) {
            card.classList.add("slideout");
            card.classList.remove("card-hades1");
            card.classList.remove("card-hades2");
            card.classList.add("card-hades3");
            card.classList.add("slidein");
            card.classList.remove("slideout");
        }
})
}