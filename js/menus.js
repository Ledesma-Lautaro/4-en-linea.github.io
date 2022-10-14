"use strict"

let rightMenu = document.querySelector('.profile-menu');
let leftMenu = document.querySelector(".hamburguer-menu");
let main = document.querySelector(".main");
let leftCross = document.querySelector("#leftCross");
let rightCross = document.querySelector("#rightCross");

console.log(main);

document.querySelector("#ham-btn").addEventListener('click',() =>{

    if(leftMenu.classList.contains('show')){
    leftMenu.classList.remove('show') ;       
    }else{
        leftMenu.classList.add('show');
        main.classList.add('blur');
    }
})

leftCross.addEventListener('click', () =>{
    if(leftMenu.classList.contains('show')){
        leftMenu.classList.remove('show')
        main.classList.remove('blur')
    }
})

rightCross.addEventListener('click', () =>{
    if(rightMenu.classList.contains('show')){
        rightMenu.classList.remove('show')
        main.classList.remove('blur')
    }
})

document.querySelector('#profile-btn').addEventListener('click',() =>{

    if(rightMenu.classList.contains('show')){
        rightMenu.classList.remove('show')
    }else{
        rightMenu.classList.add('show')
        main.classList.add('blur');
    }
})

main.addEventListener('click', () =>{
    if(rightMenu.classList.contains('show') | leftMenu.classList.contains('show')){
        leftMenu.classList.remove('show')
        rightMenu.classList.remove('show')
        main.classList.remove('blur')
    }
})
