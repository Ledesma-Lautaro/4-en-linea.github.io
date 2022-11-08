class Drop extends Casillero{

    constructor(fill, context){
        super(fill, context)
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.lineWidth = 2.5;
        // this.ctx.moveTo(this.posX, this.posY);
        // this.ctx.lineTo(this.posX, this.posY + 80);
        this.ctx.moveTo(this.posX + 80, this.posY)
        this.ctx.lineTo(this.posX + 80, this.posY+80);
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
        this.ctx.fillRect(this.posX, this.posY, this.width,this.height)
        this.ctx.strokeStyle = "#110041";
        this.ctx.stroke();
        this.ctx.closePath();

    }
}