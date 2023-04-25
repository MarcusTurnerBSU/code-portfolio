class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height - 100;
    this.radius = 10;
    this.velocityX = 5;
    this.velocityY = -5;
  }
  
  detectCollisionWithWalls() {
    if (this.x > canvas.width - this.radius || this.x < this.radius) {
      this.velocityX *= -1;
    }
    
    if (this.y < this.radius) {
      this.velocityY *= -1;
    }
  }
  
  detectCollisionWithBottom() {
    if (this.y > canvas.height + this.radius) {
      return true;
    }
  }
  
  detectCollisionWithRect(rect) {
    let testX = this.x;
    let testY = this.y;
    
    if (this.x < rect.x) testX = rect.x;
    else if (this.x > rect.x + rect.width) testX = rect.x + rect.width;
    if (this.y < rect.y) testY = rect.y;
    else if (this.y > rect.y + rect.height) testY = rect.y + rect.height;
      
    const distX = this.x - testX;
    const distY = this.y - testY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance <= this.radius) {
      return true;
    }
  }
  
  detectCollisionWithPaddle(paddle) {
    if (this.detectCollisionWithRect(paddle)) {
      this.velocityY *= -1;
    }
  }
  
  detectCollisionWithBricks(bricks) {
    let pointsGained = 0;
    
    for (let i = 0; i < bricks.length; i++) {
      for (let j = 0; j < bricks[i].length; j++) {
        const brick = bricks[i][j];
        if (brick.isCleared) continue;      
        if (this.detectCollisionWithRect(brick)) {
          this.velocityY *= -1;
          pointsGained += 1;
          brick.clear();
        }
      }
    }
    
    return pointsGained;
  }
  
  update() {    
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
  
  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}