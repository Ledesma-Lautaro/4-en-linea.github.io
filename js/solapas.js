"use strict"

let car = document.querySelector("#caracteristicas");
let req = document.querySelector("#requisitos");
let idi = document.querySelector("#idiomas");
let dom = document.querySelector('.features-text');


car.addEventListener("click", () =>{
    if(!car.classList.contains('selected')){
        car.classList.remove('deselected')
        car.classList.add('selected')
        req.classList.remove('selected')
        req.classList.add('deselected')
        idi.classList.remove('selected')
        idi.classList.add('deselected')
    }

    dom.innerHTML = ''
});

req.addEventListener("click", () =>{
    if(!req.classList.contains('selected')){
        req.classList.remove('deselected')
        req.classList.add('selected')
        idi.classList.remove('selected')
        idi.classList.add('deselected')
        car.classList.remove('selected')
        car.classList.add('deselected')
    }
});

idi.addEventListener("click", () =>{
    if(!idi.classList.contains('selected')){
        idi.classList.remove('deselected')
        idi.classList.add('selected')
        req.classList.remove('selected')
        req.classList.add('deselected')
        car.classList.remove('selected')
        car.classList.add('deselected')    }


});

