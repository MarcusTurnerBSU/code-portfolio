const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

//let circleX = 0;
//
//function main() {
//    requestAnimationFrame(main);
//    
//    circleX += 1;
//    
//    ctx.clearRect(0, 0, 1024, 768);
//    ctx.beginPath();
//    ctx.arc(circleX, 384, 50, 0, Math.PI * 2);
//    ctx.fill();
//}
//
//main();

//let positionX = 512;
//let velocityX = 4;
//
//function main() {
//    requestAnimationFrame(main);
//    
//    if (positionX > 974) || positionX < 50) {
//        velocityX *= -1;
//    }
//    
//    positionXX += velocityX;
//    
//    ctx.clearRect(0, 0, 1024, 768);
//    ctx.beginPath();
//    ctx.arc(circleX, 384, 50, 0, Math.PI * 2);
//    ctx.fill();
//}
//
//main();

//let positionX = 512;
//let positionY = 384;
//let velocityX = 4;
//let velocityY = 4;
//
//function main() {
//    requestAnimationFrame(main);
//    
//    if (positionX > 974) || positionX < 50) {
//        velocityX *= -1;
//    }
//    
//    if (positionY > 718 || positionY < 50) {
//        velocityY *= -1;
//    }
//    
//    positionX += velocityX;
//    positionY += velocityY;
//    
//    ctx.clearRect(0, 0, 1024, 768);
//    ctx.beginPath();
//    ctx.arc(positionXX, positionY, 50, 0, Math.PI * 2);
//    ctx.fill();
//}
//
//main();

//let positionX = 51;
//let positionY = 150;
//let velocityX = 15;
//let velocityY = -15;
//
//function main() {
//    requestAnimationFrame(main);
//    
//    if (positionX > 974) || positionX < 50) {
//        velocityX *= -1;
//    }
//    
//    if (positionY > 718) {
//        velocityY *= -1;
//    }
//    
//    velocityX += 0.999;
//    velocityY += 1;
//    
//    positionX += velocityX;
//    positionY += velocityY;
//    positionY = Math.min(718, positionY);
//    
//    ctx.clearRect(0, 0, 1024, 768);
//    ctx.beginPath();
//    ctx.arc(positionXX, positionY, 50, 0, Math.PI * 2);
//    ctx.fill();
//}
//
//main();

//class Circle {
//    constructor() {
//        this.positionX: 51;
//        this.positionY: 150;
//        this.velocityX: 15;
//        this.velocityY: -15; 
//        this.radius = 50;
//        this.color = 'black';
//    }
//    
//    update() {        
//        if (this.positionX > 974) || circle.positionX < 50) {
//            this.velocityX *= -1;
//        }
//
//        if (this.positionY > 718) {
//            this.velocityY *= -1;
//        }
//
//        this.velocityX += 0.999;
//        this.velocityY += 1;
//
//        this.positionX += circle.velocityX;
//        this.positionY += circle.velocityY;
//        this.positionY = Math.min(718, circle.positionY);
//        }
//    
//    draw() {
//        ctx.beginPath();
//        ctx.arc(this.positionX, this.positionY, 50, 0, Math.PI * 2);
//        ctx.fill();
//    }
//
//    }
//
//const circle = new Circle();
//
//function main() {
//    requestAnimationFrame(main);
//        
//    ctx.clearRect(0, 0, 1024, 768);
//    circle.update();
//    circle.draw();
//}
//
//main();

class Circle {
    constructor(setup) {
        const { positionX, positionY, velocityX, velocityY, radius, color } = setup;
        
        this.positionX = Math.max(radius, Math.min(1024 - radius, positionX));
        this.positionY = Math.min(768 - radius, positionY);
        this.velocityX = velocityX;
        this.velocityY = velocityY; 
        this.radius = radius;
        this.color = color;
    }
    
    update() {        
        if (this.positionX > 1024 - this.radius || this.positionX < this.radius) {
            this.velocityX *= -1;
        }

        if (this.positionY > 768 - this.radius) {
            this.velocityY *= -1;
        }

        this.velocityX += 0.999;
        this.velocityY += 1;

        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
        this.positionY = Math.min(718, this.positionY);
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    }

const circles = [];
let frameCount = 0;


function main() {
    requestAnimationFrame(main);
    
    if (frameCount % 60 == 0 && circles.length < 50) {
        circles.push(new Circle({
            positionX: 0,
            positionY: Math.random() + 768,
            velocityX: Math.random() * 10 + 5,
            velocityY: Math.random() * -20,
            radius: Math.random() * 50 + 20,
            color: `hsla(
                ${Math.random() * 360},
                ${Math.random() * 50 + 50}%,
                ${Math.random() * 50 + 25}%,
                0.5
                )`
        }))
    }
        
    ctx.clearRect(0, 0, 1024, 768);
    
    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
        circles[i].draw();
    }
    
    frameCount++;
}

main();