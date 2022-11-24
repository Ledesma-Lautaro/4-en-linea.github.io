"use strict"

let rightMenu = document.querySelector('.profile-menu');
let leftMenu = document.querySelector(".hamburguer-menu");
let search = document.querySelector(".buscar");
let categorias= document.querySelectorAll(".categorias .categoria");
let redes = document.querySelectorAll(".red");

let main = document.querySelector(".main");
let leftCross = document.querySelector("#leftCross");
let rightCross = document.querySelector("#rightCross");
let header = document.querySelector(".header");
let hamburger = document.querySelector("#ham-btn");
//hamburger icon
let icon = document.querySelector('#secondLine');
var iconBefore = document.querySelector('#firstLine');
var iconAfter = document.querySelector('#thirdLine');


hamburger.addEventListener('click',() =>{

    if(leftMenu.classList.contains('show')){
        leftMenu.classList.remove('show');
        categorias.forEach(categoria => {
            categoria.classList.remove('show')
        });  
        redes.forEach(red => {
                red.classList.remove('show')
        }); 
        search.classList.remove('show');
        main.classList.remove('blur');   
        //animacion icono
        icon.setAttribute("style", "none;");
        iconBefore.setAttribute("style", "none;");
        iconAfter.setAttribute("style", "none;");
    }else{
        leftMenu.classList.add('show');
        search.classList.add('show');
        categorias.forEach(categoria => {
            setTimeout(function(){
                categoria.classList.add('show')
            },100)
        });
        redes.forEach(red => {
            setTimeout(function(){
                red.classList.add('show')
            },200)
        });
        main.classList.add('blur');
        //animacion icono
        icon.setAttribute("style", "animation: 0.4s linear 0.2s forwards hamburger;");
        iconBefore.setAttribute("style", "animation: 0.4s linear 0.2s forwards hamburgerBefore;");
        iconAfter.setAttribute("style", "animation: 0.4s linear 0.2s forwards hamburgerAfter;");
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
        leftMenu.classList.remove('show');
        categorias.forEach(categoria => {
            categoria.classList.remove('show')
        });  
        redes.forEach(red => {
                red.classList.remove('show')
        }); 
        search.classList.remove('show');
        main.classList.remove('blur');   
        //animacion icono
        icon.classList.remove('openMenu');
    }
})

window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY;
    if(scrolled > 500){
        header.classList.add('transition')
    }else if(scrolled < 500){
        header.classList.remove('transition')
    }
})

