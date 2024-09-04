import { Circle } from './Circle.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let circle1 = new Circle(837, 400, 150, 'blue');

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle1.draw(ctx);
}

draw();
