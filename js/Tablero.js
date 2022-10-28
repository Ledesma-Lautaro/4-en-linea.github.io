class Tablero {
    
    constructor(x, y, context){
        this.x = x
        this.y = y
        this.ctx = context
    }
    
    casilleros = []; 

    construirTablero(){
        for (let index = 0; index < this.x; index++) {
            for (let index = 0; index < this.y; index++) {
               const casillero = new Casillero(arguments);
               casillero.draw();
               this.casilleros.push(casillero)
            
            }
            
        }
    }
}