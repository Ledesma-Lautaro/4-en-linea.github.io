class Figura {

    constructor(posX, posY, fill, context){
        this.posX = posX;
        this.posY = posY;
        this.ctx = context;
    }

    setFill(fill){
        this.fill = fill;
    }

    setPosition(x, y){
        this.posX = x;
        this.posY = y;
    }

    getPosition(){
        return{
            x : this.getPosX(),
            y : this.getPosY()
        }
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    draw(){
        this.ctx.fillStyle = this.fill;
    }
}