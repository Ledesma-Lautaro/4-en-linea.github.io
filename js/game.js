
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let jugar = document.querySelector("#jugar").addEventListener('click', init);
function init(){
    console.log("Entra al init");
    createBoard();
    createJugadores();
    // createFichas();
};

function createBoard(){
    console.log("entra al board");
    let modo = document.querySelector("#modoJuego").value;
    let cantX = 0;
    let cantY = 0;
    let posX;
    //4 en linea
    if(modo == 1){
        cantX = 7;
        cantY = 6;
        posX = 320;
    }
    //5 en linea
    else if(modo == 2){
        cantX = 8;
        cantY = 7;
        posX = 280;
    }
    //6 en linea
    else if(modo == 3){
        cantX = 9;
        cantY = 8;
        posX = 240
    }

    let tablero = new Tablero(posX, 100, ctx)
    tablero.construirTablero(cantX, cantY);
}

function createJugadores(){
    let imgvalue = document.querySelector("#fichasImg").value;
    let modo = document.querySelector("#modoJuego").value;
    let imgj1 = new Image();
    let imgj2 = new Image();
    let nroFichas = 0;

    if(imgvalue == 1){
        //spiderman
        imgj1.src = "img/fichas/spiderman.jpg";
        //thanos
        imgj2.src = "img/fichas/thanos.png";
    }
    else if(imgvalue == 2){
        //ironman
        imgj1.src = "img/fichas/ironman.webp";
        //ultron
        imgj2.src = "img/fichas/ultron.webp";
    }
    else if(imgvalue == 3){
        //thor
        imgj1.src = "img/fichas/thor.webp";
        //loki
        imgj2.src = "img/fichas/loki.jpg";
    }

    let jugador1 = new Jugador("Jugador 1", imgj1, ctx);
    let jugador2 = new Jugador("Jugador 2", imgj2, ctx);

    //4 en linea
    if(modo == 1){
        nroFichas = 42;
    }
    //5 en linea
    else if(modo == 2){
        nroFichas = 56;
    }
    //6 en linea
    else if(modo == 3){
        nroFichas = 72;
    }
    jugador1.createFichas(nroFichas/2);
    jugador2.createFichas(nroFichas/2);
}

