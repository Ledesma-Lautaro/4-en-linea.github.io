class Ficha {

    constructor(ctx, x, y, img, jugador){
        this.x = x;
        this.y = y;
        this.jugador = jugador;
        this.ctx = ctx;
        this.img = img;
    }



/*
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 80, 50, 0, 2 * Math.PI);
ctx.stroke();
 */
draw(){
    this.ctx.beginPath();
    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = "#D0A200"
    this.ctx.arc(this.x,this.y,25,0,2*Math.PI);
    this.ctx.stroke();
    if (this.jugador != null) {
        this.ctx.fillStyle = this.img;
    }else{
        this.ctx.fillStyle = "#FFFFFF";
    }
    this.ctx.fill();
    this.ctx.closePath();
}
}

// img.onload = function () {
//     coorY = 0, coorX = 300;
//     for (let x = 3; x < (11 + valorDeLinea); x++) {
//         let lugares = []
//         for (let y = 0; y < (7 + valorDeLinea); y++) {
//             coorY = y * 100;
//             if (y != 0) {
//                 context.spaces.drawImage(img, coorX, coorY);
//                 lugares.push({
//                     coorY,
//                     jugador: 0,
//                 });
//             }
//         }
//         matrix[x] = lugares;
//         coorX = x * 100;
//     }

// }