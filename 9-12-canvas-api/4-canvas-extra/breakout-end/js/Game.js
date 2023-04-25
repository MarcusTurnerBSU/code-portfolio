class Game {
  constructor() {
    this.ball = new Ball();
    this.paddle = new Paddle();
    
    const rows = 6;
    const cols = 12;
    const brickMargin = 2;
    const brickWidth = (canvas.width - (cols - 1) * brickMargin) / cols;
    const brickHeight = 25;
    const topMargin = 50;
    
    this.bricks = [];
    for (let i = 0; i < rows; i++) {
      this.bricks[i] = [];
      for (let j = 0; j < cols; j++) {
        this.bricks[i][j] = new Brick({
          x: j * brickWidth + j * brickMargin,
          y: i * (brickHeight + brickMargin) + topMargin,
          width: brickWidth,
          height: brickHeight
        });
      }
    }
    
    this.score = 0;
    this.turns = 3;
    this.maxPoints = this.bricks.length * this.bricks[0].length;
  }
  
  update() {
    if (this.isOver || this.isPaused) {
      return;
    }
    
    this.ball.detectCollisionWithWalls()
    
    if (this.ball.detectCollisionWithBottom()) {
      this.turns -= 1;
      this.isPaused = true;
      
      if (this.turns > 0) {
        setTimeout(this.restart.bind(this), 1000);
      } else {
        setTimeout(this.endGame.bind(this), 1000);
      }
    }
    
    this.ball.detectCollisionWithPaddle(this.paddle);
    
    this.score += this.ball.detectCollisionWithBricks(this.bricks);
    
    if (this.points == this.maxPoints) {
        this.isPaused = true;
        setTimeout(this.endGame.bind(this), 1000);
    }
    
    this.ball.update();
    this.paddle.update();
  }
  
  restart() {
    this.ball = new Ball();
    this.isPaused = false;
  }
    
  endGame() {
    this.isOver = true;
  }
  
  draw() {
    if (this.isOver) {      
      let message;
      if (this.points == this.maxPoints) {
        message = 'YOU WIN!';
      } else {
        message = 'GAME OVER';
      }
      
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '48px monospace';
      ctx.fillText(message, 400, 300)
      return;
    }
    
    ctx.font = '32px monospace';
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'top';
    
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${this.score}`, 10, 10);
    
    ctx.textAlign = 'right';
    ctx.fillText(`Turns: ${this.turns}`, canvas.width - 10, 10);
    
    this.paddle.draw();
    this.ball.draw();
    
    for (let i = 0; i < this.bricks.length; i++) {
      for (let j = 0; j < this.bricks[i].length; j++) {
        this.bricks[i][j].draw();
      }
    }
  }  
}