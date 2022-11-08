class Ficha {
  constructor(ctx, x, y, img, jugador) {
    this.x = x;
    this.y = y;
    this.jugador = jugador;
    this.ctx = ctx;
    this.img = img;
    this.radio = 28;
    this.insertada = false;
    this.posOGX = this.x;
    this.posOGY = this.y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "#5C27FC";
    this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    if (this.jugador != null) {
      this.ctx.lineWidth = 5;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, true);
      this.ctx.clip();
      this.ctx.drawImage(this.img, this.x - 28, this.y - 28, 56, 56);
      this.ctx.closePath();
      this.ctx.restore();
    } else {
      this.ctx.fillStyle = "#110041";
      this.ctx.fill();
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  isPointInside(x, y) {
    let _x = x - this.x;
    let _y = y - this.y;
    if (this.jugador != null) {
      return Math.sqrt(_x * _x * _y * _y) < this.radio;
    } else {
      return false;
    }
  }

  setPosition(x, y) {
    if(this.insertada == false){
      this.x = x;
      this.y = y;
    }
  }
  
  insertadaTrue(){
    this.insertada = true;
  }

  getPositionX(){
    return this.x;
  }
  getPositionY(){
    return this.y;
  }

  getJugador(){
    return this.jugador;
  }

  getOGPositionX(){
    return this.posOGX;
  }
  getOGPositionY(){
    return this.posOGY;
  }
}
