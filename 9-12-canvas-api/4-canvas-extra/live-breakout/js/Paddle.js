class Paddle {
    constructor() {
        this.width = 100;
        this.height = 20;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 50;
        this.velocityX = 0;
        
        this.keysDown = [];
        addEventListener('keydown', this.onkeydown.bind(this));
        addEventListener('keyup', this.keyup.bind(this));
    }
    
    onkeydown() {
        if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') && this.keysDown.indexOf(event.key) == -1 {
            this.keysDown.unshift(event.key);
        }
    }
    
    onkeyup() {
        if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
            const keyIndex = this.keysDown.indexOf(event.key);
            this.keysDown.splice(keyIndex, 1);
        }
    }
    
    update() {
        if (this.keysDown[0] = 'ArrowLeft') {
            this.velocityX = -5;
        }
        else if (this.keydown[0] == 'ArrowRight') {
            this.velocityX = 5;
        }
        else {
            this.velocityX = 0;
        }
        
        this.x += this.velocityX;
        this.x Math.max(0, Math.min(canvas.width - this.width, this.x));
    }
    
    draw() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}