
let fondo2 = document.querySelector("#fondo-2");
let fondo1 = document.querySelector("#fondo-1");
let suelo2 = document.querySelector("#suelo-2");
let suelo1 = document.querySelector("#suelo-1");
let humo = document.querySelector("#humo");
let serpiente2 = document.querySelector("#serpiente-2");
let serpiente1 = document.querySelector("#serpiente-1");
let zagreo = document.querySelector("#zagreo");
let logo = document.querySelector("#hadeslogo");



window.addEventListener("scroll", function(){
var value = window.scrollY;

fondo2.style.top = value *0.1 + "px";
fondo1.style.top = value *0.2 + "px";
suelo2.style.top = value *0.3 + "px";
suelo1.style.top = value *0.4 + "px";
humo.style.top = value *0.5 + "px";
serpiente2.style.top = value *0.6 + "px";
serpiente1.style.top = value *0.7 + "px";
zagreo.style.top = value *0.8 + "px";

logo.style.opacity = 0.8- + window.pageYOffset/550 + '';
logo.style.top = +window.pageXOffset+'px';
logo.style.backgroundPositionY = +window.pageXOffset/2 + 'px';
}) 