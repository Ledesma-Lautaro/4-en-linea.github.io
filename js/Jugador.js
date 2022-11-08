class Jugador{

    

    fichas = [];
    constructor(nombre, img, ctx){
        this.nombre = nombre;
        this.turno = false;
        this.img = img;
        this.ctx = ctx;
        this.fichaClickeada = null;
    }

    createFichas(nroFichas){
        for (let index = 0; index < nroFichas; index++) {
            let y = 700 - index * 18;
            if(this.nombre == "Jugador 1"){
                let x = 40;
                // if (index>= 30) {
                //     x = 110;
                //     y= 700;
                // }
                 let ficha = new Ficha(this.ctx, x, y, this.img, this);
                 this.fichas.push(ficha)
                 ficha.draw();

            }
            else{
                let x = 1120;
                // if (this.fichas.lenght >= 20) {
                //     x = 1050;
                // }
                let ficha = new Ficha(this.ctx, x, y, this.img, this);
                this.fichas.push(ficha)
                ficha.draw();

            }
        }

    }

    getImage(){
        return this.img;
    }

    getNombre(){
        return this.nombre;
    }

    redraw(){
        this.fichas.forEach(ficha => {
            
            ficha.draw();
        });
    }

    isMyTurn(){
        this.turno = true;
    }

    isNotMyTurn(){
       this.turno = false;
    }

    getTurn(){
        return this.turno;
    }

    setFichaClickeada(ficha){
        this.fichaClickeada = ficha;
    }

    getFicha(){
        return this.fichaClickeada;
    }

    moveFicha(x, y){
        this.fichaClickeada.setPosition(x,y)
    }

    findClicked(x, y){
        for (let index = 0; index < this.fichas.length; index ++) {
            let ficha = this.fichas[index];
            if(ficha.isPointInside(x, y)){
                this.fichaClickeada = ficha;
            }
        }
    }
    
}