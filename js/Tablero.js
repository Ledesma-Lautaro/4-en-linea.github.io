class Tablero {
    
    casilleros = []; 
    drops = [];
    constructor(x, y, context){
        this.x = x;
        this.y = y;
        this.ctx = context;
    }
    

    construirTablero(cantX, cantY){
        console.log("construir tablero");
        for (let index = 0; index < cantX ; index++) {
            let drop = new Drop("#200080", this.ctx);
            let height = drop.getHeight();
            let width = drop.getWidth();
            drop.setPosX(this.x + width * index);
            drop.setPosY(this.y - height);
            drop.draw();
            this.drops.push(drop);
            for (let indexY = 0; indexY < cantY ; indexY++) {
               let casillero = new Casillero("#FFD300", this.ctx);
              
               casillero.setPosX(this.x + width * index)
               casillero.setPosY(this.y + height * indexY)
               casillero.draw();
               console.log("Casillero");
               this.casilleros.push(casillero)
            }
        }
    }

    redraw(){
        this.casilleros.forEach(casillero => {
            casillero.draw()
        });
        this.drops.forEach(drop => {
            drop.draw()
        });
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    isInsideDrop(posx, posy){
        drops.forEach(drop => {
            dropX = drop.getPosX();
            dropY = drop.getPosY();
        
            if()

        });
    }
}