class Tablero {
    
    casilleros = []; 
    constructor(x, y, context){
        this.x = x;
        this.y = y;
        this.ctx = context;
    }
    

    construirTablero(cantX, cantY){
        console.log("construir tablero");
        for (let index = 0; index < cantX ; index++) {
            for (let indexY = 0; indexY < cantY ; indexY++) {
               let casillero = new Casillero("#FFD300", this.ctx);
               let height = casillero.getHeight();
               let width = casillero.getWidth();
               casillero.setPosX(this.x + width * index)
               casillero.setPosY(this.y + height * indexY)
               casillero.draw();
               console.log("Casillero");
               this.casilleros.push(casillero)
            }
        }
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }
}