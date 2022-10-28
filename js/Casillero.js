class Casillero extends Figura{

    constructor(posX, posY, fill, context){
        super(posX,posY,fill,context)

        this.width = 100;
        this.height = 100;
    }

    draw(){
        super.draw
        this.ctx.fillRect(this.posX, this.posY, this.width,this.height)
    }

    getWidth(){
        return this.width
    }

    getHeight(){
        return this.height;
    }
}