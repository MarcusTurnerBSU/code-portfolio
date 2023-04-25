const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

class Bubble {
    constructor() {
        this.positionX = Math.random() * 1024;
        this.positionY = 800;
        this.velocityX = 0;
        this.velocityY = Math.random() * -1 -1;
        this.radius = Math.random() * 20 + 5;
    }
    
    update() {
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}

const bubbles = [];
let frameCount = 0;

function main() {
    requestAnimationFrame(main);
    
    ctx.clearRect(0, 0, 1024, 768);
    
    if (frameCount % 5 == 0 && bubbles.length < 100) {
        bubbles.push(new Bubble());
    }
    
      for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].positionY < -bubbles[i].radius) {
            bubbles.splice(i, 1)
            continue;
        }
        
        bubbles[i].update();
        bubbles[i].draw();
    }
    
    frameCount++;
}

main();