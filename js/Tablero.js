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
        //genera los drops
        for (let index = 0; index < cantX ; index++) {
            let drop = new Drop("#2900A3", this.ctx);
            let height = drop.getHeight();
            let width = drop.getWidth();
            drop.setPosX(this.x + width * index);
            drop.setPosY(this.y - height);
            drop.draw();
            this.drops.push(drop)
            //genera los casilleros
            for (let indexY = 0; indexY < cantY ; indexY++) {
               let casillero = new Casillero("#470AFF", this.ctx);
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

    isInsideDrop(posX, posY){
        let returndrop = null;
        this.drops.forEach(drop => {
            let dropX = drop.getPosX();
            let dropY = drop.getPosY();
            let width = drop.getWidth();
            let height = drop.getHeight();
            if(!(posX < dropX ||posX > dropX + width||posY < dropY ||posY > dropY + height)){
                returndrop = drop;
            }
        });
        return returndrop;
    }

    getFila(x){
    for (let index = 0; index < this.casilleros.length; index++) {
        const casillero = this.casilleros[index];
        if(casillero.getPosX() == x){
            return index;
        }
    }

}

    getCasillero(fila, modo){
        let max = 0;
        if(modo == 1){
            max = 6;
        }
        else if(modo == 2){
            max = 7;
        }
        else if(modo == 3){
            max = 8;
        }
        let index = fila;
        while( index < fila+max && this.casilleros[index].isEmpty()){
            index++;
        }
        return this.casilleros[index-1];
    }

    insertFicha(casillero, jugador){
        casillero.setFicha(jugador);
    }

    thereIsWinner(modo){
        let max = 0;
        let win = 0;
        if(modo == 1){
            max = 6;
            win = 4;
        }
        else if(modo == 2){
            max = 7;
            win = 5;
        }
        else if(modo == 3){
            max = 8;
             win = 6;
        }

        let horizontal = false;
        let vertical = false;
        let diagonal = false;
                 //recorre las filas
            //recorre cada casillero de sus respectivas filas
            for (let index = 0; index < this.casilleros.length; index++) {
                const casillero = this.casilleros[index];
                const jugador = casillero.getFichaInside().getJugador();
                if(jugador != null){
                    if(index >= this.casilleros.length - max){
                        vertical = this.lookColumn(index, jugador, win);
                    }
                    else{
                        horizontal = this.lookRow(index, jugador,max, win);
                        vertical = this.lookColumn(index, jugador, win);
                    }
                    if(horizontal || vertical){
                        return true;
                    }
                }
            }
        return false;
    }

    lookRow(index, jugador, max, win){
        let i = 1;
        let h = 0;
        if(this.casilleros[index+ (max*i)] != null){
            let casillero = this.casilleros[index+ (max * i)]
            while(casillero.getFichaInside().getJugador() == jugador&& index + (max*i) < this.casilleros.length){
                casillero = this.casilleros[index+ (max * i)]
                h++;
                i++;
            }
        }
        if(h >= win){
            return true;
        }
        else{
            return false;
        }
    }
    
    lookColumn(index, jugador, win){
        let i = 0;
        let v = 0;
        if(this.casilleros[index+ i] != null){
            let casillero = this.casilleros[index + i];
            while(casillero.getFichaInside().getJugador() == jugador && index + i < this.casilleros.length){
                casillero = this.casilleros[index + i];
                v++;
                i++;
            }
        }
        if(v - 1 >= win){
            return true;
        }
        else{
            return false
        }
    }
} 