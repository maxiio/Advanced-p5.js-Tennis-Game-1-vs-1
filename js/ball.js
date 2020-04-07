class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.width = 24;
        this.height = 24;
        this.xSpeed = -10;
        this.ySpeed = 4;
    }

    increaseSpeed(increaseAmount, updateTime) {
        setInterval(() => {
            if (this.xSpeed < 0) {
                this.xSpeed = this.xSpeed - increaseAmount;
                
            } else if (this.xSpeed > 0) {
                this.xSpeed = this.xSpeed + increaseAmount;
                
            }
        }, updateTime);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.width, this.height);
    }

    edges() {
        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
        if (this.x < 5) {
            this.reset('secondUser');
        }
        if (this.x > width - 5) {
            this.reset('firstUser');
        }
        // first user
        if (this.x < paddle1.width + 20) {
            if (this.y > paddle1.y && this.y < paddle1.y + paddle1.height) {
                this.xSpeed *= -1;
            }
        }
        // second user
        if (this.x > width - paddle2.width - 20) {
            if (this.y > paddle2.y && this.y < paddle2.y + paddle2.height) {
                this.xSpeed *= -1;
            }
        }
    }
    reset(situation) {
        ball.xSpeed = 0;
        ball.ySpeed = 0;
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 2);
            let resetSpeed = 10;
            if (randomNumber == 1) resetSpeed = -10;
            else resetSpeed = 10;
            ball.xSpeed = resetSpeed;
            ball.ySpeed = 4;
        }, 700);
        
        this.x = width / 2;
        this.y = height / 2;

        switch (situation) {
            case 'firstUser':
                firstUserScore++;
                break;
            case 'secondUser':
                secondUserScore++;
                break;
        }
    }
}
