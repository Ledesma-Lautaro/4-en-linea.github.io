class Casillero {

    constructor(fill, context){
        this.fill = fill;
        this.ctx = context;
        this.posX = 0;
        this.posY = 0;
        this.width = 80;
        this.height = 80;
        this.ficha = null;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
        this.ctx.fillRect(this.posX, this.posY, this.width,this.height)
        if(this.ficha == null){
            this.ficha = new Ficha(this.ctx,this.posX + this.width/2, this.posY + this.height/2, null, null);
        }
        if(this.ficha.getImage != null){
        this.ficha.getImage().onload() = function(){
        this.ficha.draw();
        this.ctx.closePath();}
        }
        else{
            this.ficha.draw();
            this.ctx.closePath();
        }
    }
    

    setPosX(x){
        this.posX = x;
    }

    setPosY(y){
        this.posY = y;
    }

    getWidth(){
        return this.width
    }

    getHeight(){
        return this.height;
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    isEmpty(){
        if(this.ficha.getJugador() == null){
            return true;
        }
        else{
            return false;
        }
    }

    setFicha(jugador){
        if(jugador != null){
          jugador.getFicha().setPosition(this.ficha.getPositionX, this.ficha.getPositionY);
          this.ficha = jugador.getFicha();
          this.ficha.insertadaTrue();
        }
    }

    getFichaInside(){
        return this.ficha;
    }
}