class Ball {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 100;
        this.radius = 10;
        this.velocityX = 5;
        this.velocityY = 5;
    }
    
    detectCollisionWithRect(rect) {
        let testX = this.x;
        let testY = this.y;
        
        if (this.x < rect.x) testX = rect.x;
        else if (this.x > rect.x + rect.width) testX = rect.x + rect.width;
        if (this. y < rect.y) test
    }
    
    detectCollisionWithWalls() {
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.velocityX += -1;
        }
        
        if (this.y < this.radius) {
            this.velocityY
        }
    }
    
    detectCollisionWithPaddle(paddle) {
        
    }
    
    detectCollisionWithBricks(bricks) {
        for ( let i = 0; i < bricks.length; i++) {
            for ( let j = 0; j < bricks[0].length; j++) {
                if (brick[i][j].isCleared) continue;
                if (this.detectCollisionWithRect(bricks[i][j])) {
                    this.velocityY += -1;
                    
                }
            }
        }
    }
    
    detectCollisionWithBottom() {
        if (this.y > canvas.height + this.radius) {
            return true;
        }
    }
    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
    
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
    }
}