class Paddle {
    constructor(x) {
        this.width = 10;
        this.height = 100;
        this.x = x;
        this.y = height / 2 - this.height / 2;
    }

    move(dir) {
        this.y += dir;
        this.y = constrain(this.y, 0, height - this.height);
    }
    show() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}