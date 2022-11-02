class Jugador{

    

    fichas = [];
    constructor(nombre, img, ctx){
        this.nombre = nombre;
        this.turno = false;
        this.img = img;
        this.ctx = ctx;
    }

    createFichas(nroFichas){
        for (let index = 0; index < nroFichas; index++) {
            let y = index * 15;
            if(this.nombre == "Jugador 1"){
                let x = 0;
                if (this.fichas.lenght >= 20) {
                    x = 90;
                }
                 let ficha = new Ficha(this.ctx, x, y, this.img, this);
                 this.fichas.push(ficha)
                 ficha.draw();

            }
            else{
                let x = 1120;
                if (this.fichas.lenght >= 20) {
                    x = 1050;
                }
                 let ficha = new Ficha(this.ctx, x, y, this.img, this);
                this.fichas.push(ficha)
            }
        }

    }
}