
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let j1;
let j2;
let tablero;
let isMouseDown = false
let jugador = null;
let rect = canvas.getBoundingClientRect();


let jugar = document.querySelector("#jugar").addEventListener('click', init);

function init(){
    console.log("Entra al init");
    createBoard();
    createJugadores();
    StartGame();
    addEvents();
    setTimer();
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

    tablero = new Tablero(posX, 100, ctx)
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

    j1 = new Jugador("Jugador 1", imgj1, ctx);
    j2 = new Jugador("Jugador 2", imgj2, ctx);

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
    
    imgj1.onload = function(){
        j1.createFichas(nroFichas/2);
    }
    imgj2.onload = function() {
        j2.createFichas(nroFichas/2);
    }
}
    function onMouseDown(e){
        isMouseDown = true;
        jugador = findClicked(e.layerX - rect.left , e.layerY - rect.top)
    }

    function onMouseUp(e){
        isMouseDown = false;
        
       if(jugador.getFicha() != null){
            let drop = tablero.isInsideDrop(e.layerX - rect.left, e.layerY-rect.top)
            if(drop != null){
                casillero = tablero.getCasillero(drop.getPosX());
                tablero.insertFicha(casillero, jugador);
                redraw();
            }
            else{
                posX = jugador.getFicha().getOGPositionX();
                posY = jugador.getFicha().getOGPositionY();
                jugador.getFicha().setPosition(posX, posY);
                redraw();  
            }
            jugador.setFichaClickeada(null);
        }
    }

    function onMouseMove(e){
        if(isMouseDown && jugador.getFicha() != null){
            jugador.moveFicha(e.layerX - rect.left , e.layerY - rect.top)
            redraw();
        }

    }
    
    function findClicked(x, y){
        if(j1.getTurn()){
            j1.findClicked(x, y);
            return j1;
        }else{
            j2.findClicked(x, y);
            return j2;
        }
        
    }

    function redraw(){
        ctx.clearRect(0, 0, 1200, 800)
        tablero.redraw();
        j1.redraw();
        j2.redraw();


    }

    function StartGame(){
        j1.isMyTurn();
        //aviso en pantalla, turno jugador 1
    }

    function addEvents(){
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mousemove', onMouseMove, false); 
    }