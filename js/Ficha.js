class Ficha {
  constructor(ctx, x, y, img, jugador) {
    this.x = x;
    this.y = y;
    this.jugador = jugador;
    this.ctx = ctx;
    this.img = img;
    this.clickeado = false;
    this.radio = 28;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "#2A019E";
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
      this.ctx.fillStyle = "#FFFFFF";
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
    this.x = x;
    this.y = y;
  }

  getPositionX(){
    return this.x;
  }
  getPositionY(){
    return this.y;
  }
}
