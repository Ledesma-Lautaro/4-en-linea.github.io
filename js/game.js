let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let boxes = [];

function init(){
    createBoard();
};

function createBoard(){
    boxes.forEach(box => {
       box.draw();
    })
}




















