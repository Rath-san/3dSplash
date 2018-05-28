const log = (l) => {
    console.log(l);
};

// const paint = {
//     createCanvas: function () {
//         const canvasElem = document.createElement('canvas');
//         canvasElem.width = this.canvasCnt.offsetWidth;
//         canvasElem.height = this.canvasCnt.offsetHeight;
//         return canvasElem;
//     },

//     init: function () {
//         this.img = new Image();
//         this.img.addEventListener('load', function () {
//             //kontener dla canvasu
//             this.canvasCnt = document.querySelector('.paint-canvas-cnt');

//             //canvas
//             this.canvasElem = this.createCanvas();
//             this.canvasCnt.appendChild(this.canvasElem);
//             this.ctx = this.canvasElem.getContext('2d');
//         }.bind(this));
//         this.img.src = 'canvas-bg.png';
//     }
// }

// paint.init();

class Paint {

    constructor() {

    }

    createCanvas() {
        const canvasElem = document.createElement('canvas');
        canvasElem.width = this.canvasCnt.offsetWidth;
        canvasElem.height = this.canvasCnt.offsetHeight;
        return canvasElem;
    }



    init() {

        this.img = new Image();
        this.img.addEventListener('load', () =>  {

            this.canvasCnt = document.querySelector('.paint-canvas-cnt');

            this.canvasElem = this.createCanvas();
            this.canvasCnt.appendChild(this.canvasElem);
            // log(this.canvasCnt);
            this.ctx = this.canvasElem.getContext('2d');
            // log(this.ctx);

            this.sizeElem = document.querySelector('.paint-size');

            this.sizeElemVal = document.querySelector('.paint-size-val');
            this.sizeElemVal.innerText = this.sizeElem.value;

            this.colorElem = document.querySelector('.painr-color');
        });
        this.img.src = '../assets/images/canvas-bg.jpg';

    }
}

const paint = new Paint().init();