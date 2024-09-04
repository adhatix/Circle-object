export class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.c = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fillStyle = this.c;
        context.fill();
        context.closePath();
    }
}
