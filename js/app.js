let ball;
let paddle1;
let paddle2;
let firstUserScore = 0;
let secondUserScore = 0;

function setup() {
    createCanvas(800, 600);
    textSize(25);
    textFont('arial');
    ball = new Ball();
    ball.increaseSpeed(2, 5000);
    paddle1 = new Paddle(10);
    paddle2 = new Paddle(width - new Paddle().width - 10);
}

function draw() {
    background(0);
    ball.update();
    ball.show();
    ball.edges();
    paddle1.show();
    paddle2.show();

    text(firstUserScore, width / 2 - width / 4, 100);
    text(secondUserScore, width / 2 + width / 4, 100);

    if (keyIsDown(SHIFT)) {
        paddle1.move(-5);
    } 
    if (keyIsDown(CONTROL)) {
        paddle1.move(5)
    } 
    if (keyIsDown(UP_ARROW)) {
        paddle2.move(-5);
    }
    if (keyIsDown(DOWN_ARROW)) {
        paddle2.move(5);
    }

    if (firstUserScore === 10) {
        alert('Game is over !!!. First User WON');
        noLoop();
    } 
    if (secondUserScore === 10) {
        alert('Game is over !!!. Second User WON');
        noLoop();
    }
}
