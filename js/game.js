
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let j1;
let j2;
let tablero;
let isMouseDown = false
let jugador = null;
let timer;
let imgj1 = new Image();
let imgj2 = new Image();
let turnos = 0;

let rect = canvas.getBoundingClientRect();
let jugar = document.querySelector("#jugar").addEventListener('click', init);
let reiniciar = document.querySelector("#reiniciar").addEventListener('click', restart)

function init(){
    console.log("Entra al init");
    changeButtons();
    createBoard();
    createJugadores();
    StartGame();
    addEvents();
    setTimer();
};

function createBoard(){
    console.log("entra al board");
    let cantX = 0;
    let cantY = 0;
    let posX;
    let modo = document.querySelector("#modoJuego").value;
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

function changeButtons(){
    let buttons = document.querySelector(".display");
    let restart = document.querySelector(".restart")

    if(!buttons.classList.contains('hidden')){
        buttons.classList.add('hidden');
        restart.classList.remove('hidden');       
        }else{
            buttons.classList.remove('hidden');
            restart.classList.add('hidden')
        }
}

function restart (){
    changeButtons();
    clearCanvas();
    clearInterval(timer);
}

function createJugadores(){
    let imgvalue = document.querySelector("#fichasImg").value;
    let modo = document.querySelector("#modoJuego").value;
    
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
        //si el jugador esta agarrando una ficha
       if(jugador.getFicha() != null){
        //si la ficha del jugador no es nula significa que esta agarrando una

        let drop = tablero.isInsideDrop(e.layerX - rect.left, e.layerY-rect.top)

            if(drop != null){
            //si el drop no es nulo significa que la ficha fue soltada en un drop
                let modo = document.querySelector("#modoJuego").value;
                //se busca la fila donde se soltó, con el posX
                fila = tablero.getFila(drop.getPosX());
                //se busca el casillero mas abajo posible, en la misma fila
                casillero = tablero.getCasillero(fila, modo);
                //insertamos la ficha en su respectivo casillero
                tablero.insertFicha(casillero, jugador);
                //se redibuja todo el canvas
                redraw();
                //buscamos si hay un ganador
                verifyWinner(modo);
                //cambiamos de turno y jugador
                changeTurn();
                //reiniciamos el timer
                clearInterval(timer);
                setTimer();
            }
            else{
                //busca las posiciones originales de la ficha y la devuelve
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
        }
        else{
            j2.findClicked(x, y);
            return j2;
        }
        
    }

    function redraw(){
        clearCanvas();
            tablero.redraw();
            j1.redraw();
            j2.redraw();
        
    }

    function clearCanvas(){
        ctx.clearRect(0, 0, 1200, 800)
    }

    function StartGame(){
        j1.isMyTurn();
        anuncio(j1, 20);
        //aviso en pantalla, turno jugador 1
    }

    function addEvents(){
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mousemove', onMouseMove, false); 
    }


    function changeTurn() {
        

        if(jugador == j1){
            let x = 950;
            jugador.isNotMyTurn();
            jugador = j2;
            jugador.isMyTurn()
            anuncio(jugador, x);
        }
        else{
            let x = 20;
            jugador.isNotMyTurn();
            jugador = j1;
            jugador.isMyTurn();
            anuncio(jugador, x);
        }

    }

    function anuncio(jugador, x){
        ctx.font = '25px Arial';
        ctx.fillStyle = "#FFD300";
        ctx.fillText('Turno del '+jugador.getNombre(), x, 50);
    }
    function setTimer(){
        
        let minutes = 1;
        let seconds = 30;
        let minutestxt = document.getElementById("minutestxt");
        let secondstxt = document.getElementById("secondstxt");
        minutestxt.innerHTML = minutes;
        secondstxt.innerHTML = seconds;
        timer = setInterval(() => {
            if (minutes == 1) {
                if(seconds >= 1){
                    if(seconds <= 10){
                        seconds--;
                        secondstxt.innerHTML = "0" + seconds;
                    }
                    else{   
                        seconds--;
                        secondstxt.innerHTML = seconds;}
                }
                else if(seconds == 0){
                    minutes = 0;
                    seconds = 59;
                    minutestxt.innerHTML = minutes;
                    secondstxt.innerHTML = seconds;
                }
            }
            else if(minutes == 0 && seconds != 0){
                if(seconds <= 10){
                    seconds--;
                    secondstxt.innerHTML = "0" + seconds;
                }
                else{
                seconds--;
                secondstxt.innerHTML = seconds;
                }
            }
            else if(minutes == 0 && seconds == 0){
                if (jugador == null) {
                    if(j1.getTurn){
                        jugador = j1;
                    }else{
                        jugador = j2
                    }
                }
                turnos++
                changeTurn();
                if(turnos > 4){
                    noOneWins()
                }

            }
           
        }, 1000);
    }

    function noOneWins(){
        clearCanvas();
        let x = canvas.width / 2 - 50
        ctx.font = '48px serif';
        ctx.fillStyle = "#FFFFFF";
        //ctx.textAlign("center");
        ctx.fillText('¡Empate!', x, 50);
      
    }

    function verifyWinner(modo){
        if(tablero.thereIsWinner(modo)){
            clearCanvas();
            let img = new Image();
            let x = canvas.width / 2 - 170
            img.src = "img/thanos.jpg"
            ctx.drawImage(img, 0, 0,1200,600);
            ctx.font = '48px serif';
            ctx.fillStyle = "#FFFFFF";
            //ctx.textAlign("center");
            if(jugador == j1){
                ctx.fillText('Ganó el Jugador 1', x, 50);
            }else{
                ctx.fillText('Ganó el Jugador 2', x, 50);
            }
        }
    }