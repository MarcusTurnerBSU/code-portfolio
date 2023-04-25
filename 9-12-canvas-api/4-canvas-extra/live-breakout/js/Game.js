class Game {
    constructor() {
        this.paddle = new Paddle();
        this.ball = new Ball();
        
        const rows = 6;
        const cols = 12;
        const brickMargin = 2;
        const brickWidth = (canvas.width - (cols - 1) * brickMargin) / cols;
        const brickHeight = 25;
        const topMargin = 50;
        
        this.bricks = [];
        for ( let 1 = 0; i < rows; i++) {
            this.bricks[i] = [];
            for ( let j = 0; j < cols; j++) {
                this.bricks[i][j] = new Brick({
                    x: j * (brickWidth + brickMargin),
                    y: i * (brickHeight + brickMargin) + topMargin,
                    width: brickWidth,
                    height: brickHeight,
                })
            }
        }
        this.isPaused = false;
    }
    
    update() {
        if (this.isPaused) {
            return;
        }
        
        this.ball.dectectCollisionWithWalls();
        
        this.ball.detectCollisionWithRect(this.paddle);
        
        if (this.ball.detectCollisionWithBottom()) {
            this.isPaused = true;
            setTimeout(this.restart.bind(this), 1000);
        }
        
        this.ball.detectCollisionWithPaddle(this.paddle);
        
        this.paddle.update();
        this.ball.update();
    }
    
    restart() {
        this.isPaused = false;
        this.ball new Ball();
    }
    
    draw() {
        this.paddle.draw();
        this.ball.draw();
    }
}