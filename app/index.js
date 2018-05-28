/**
 * Application entry point
 */
import 'styles/index.scss';
// import 'paint.js';
import 'hehe';


// Load application styles
// Load images

// .pug apply template
if (process.env.NODE_ENV !== 'production') {
    require('./_pug/index.pug');
}

// ================================
// START YOUR APP HERE
// ================================
// console.log('hello world');

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(50,50,50,50);

// ctx.font = "italic bold 30px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText('Ala ma kota', 0, 30);

// ctx.font = "italic bold 20px Arial";
// ctx.textBaseline = "bottom";
// ctx.strokeText('Ala ma kota', 30, 70);

// ctx.font = "normal 10px Arial";
// ctx.textBaseline = "top";
// ctx.strokeText('Ala ma kota', 130, 80);

// ctx.beginPath();
// ctx.moveTo(35, 10); //rysowanie zaczynamy od punktów 35,10 - tam więc przesuwamy nasze piórko
// ctx.lineTo(60, 40);
// ctx.lineTo(10, 40);
// ctx.lineTo(35, 10);
// ctx.stroke();

// ctx.fillText('a', 35, 60);
// ctx.fillText('c', 50, 25);
// ctx.fillText('b', 70, 130);

// wykres
// const data = [30, 30, 40, 100, 30, 20, 50, 10, 5, 7, 3, 15, 20, 60, 28, 15, 10, 20, 10, 70];
// const stepSize = parseInt(400 / data.length);

// ctx.beginPath();
// //górne ramie
// ctx.moveTo(0, 150 - data[0]);
// ctx.fillText(data[0], 0, 150 - data[0] - 10);
// let bottomI = 0;

// for (let i = 1; i < data.length; i++) {
//     ctx.lineTo(i * stepSize, 150 - data[i]);
//     ctx.fillText(data[i], i * stepSize, 150 - data[i] - 10);
//     bottomI = i;
// }

// //zamykamy kształt od dołu
// ctx.lineTo(bottomI * stepSize, 150);
// ctx.lineTo(0, 150);
// ctx.closePath();

// //obrysowujemy
// ctx.fill();


// łuki
// const radianAngle = (angle) => {
//     return (Math.PI/180)*angle;
// };

// for (let i = 0; i < 4; i++) {
//     ctx.beginPath();
//     ctx.arc(75, 75, 10 + (i * 5), radianAngle(0), radianAngle(200), false);
//     // (środex x,y, promień, początek łuku, koniec łuku, zgodnie ze wskazwkami zegara) pocz/kon między tymi będzie się łuk zawierał jak w kole
//     ctx.stroke();
// }

// ścieżki
// ctx.beginPath();
// ctx.moveTo(60,50)
// ctx.bezierCurveTo(60,100, 120,100, 120,50)
// ctx.bezierCurveTo(60, 100, 120, 75, 60, 50)

// ctx.stroke();

// function roundedRect(canvas, x, y, width, height, radius) {
//     ctx.beginPath();
//     ctx.moveTo(x, y + radius);
//     ctx.lineTo(x, y + height - radius);
//     ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
//     ctx.lineTo(x + width - radius, y + height);
//     ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
//     ctx.lineTo(x + width, y + radius);
//     ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
//     ctx.lineTo(x + radius, y);
//     ctx.quadraticCurveTo(x, y, x, y + radius);
//     ctx.stroke();
// }
// roundedRect(ctx, 10, 10, 130, 130, 20);

// ctx.strokeStyle = "green";
// ctx.lineWidth = 10;
// ctx.lineCap = 'round'
// ctx.beginPath();
// ctx.moveTo(60, 10); //rysowanie zaczynamy od górnego kąta
// ctx.lineTo(120, 120);
// ctx.lineTo(10, 120);
// ctx.lineTo(60, 10);
// ctx.stroke();

// ctx.fillStyle = "rgba(201,224,54,0.4)";
// ctx.beginPath();
// ctx.moveTo(90, 20);
// ctx.lineTo(150, 130);
// ctx.lineTo(10, 130);
// ctx.closePath();
// ctx.fill();

// const gradient = ctx.createLinearGradient(0,0,150,150)

// gradient.addColorStop(0, "blue");
// gradient.addColorStop(1, "red");


// ctx.fillStyle = gradient;
// ctx.beginPath();
// ctx.moveTo(90, 20);
// ctx.lineTo(150, 130);
// ctx.lineTo(10, 130);
// ctx.closePath();
// ctx.fill();







// console.dir(canvas);
