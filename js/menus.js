"use strict"


let leftMenu = document.querySelector(".hamburguer-menu");
let main = document.querySelector(".main");
let cross = document.querySelector(".cross")

console.log(main);

document.querySelector("#ham-btn").addEventListener('click',() =>{

    if(leftMenu.classList.contains('show')){
    leftMenu.classList.remove('show') ;       
    }else{
        leftMenu.classList.add('show');

        main.classList.add('blur');
    }
})

document.querySelector("#close").addEventListener('click', () =>{
    leftMenu.classList.remove('show');
    main.classList.remove('blur');
})
