class Casillero {

    constructor(fill, context){
        this.fill = fill;
        this.ctx = context;
        this.posX = 0;
        this.posY = 0;
        this.width = 80;
        this.height = 80;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
        this.ctx.fillRect(this.posX, this.posY, this.width,this.height)
        let ficha = new Ficha(this.ctx,this.posX + this.width/2, this.posY + this.height/2, null, null);
        ficha.draw();
        this.ctx.closePath();

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
}