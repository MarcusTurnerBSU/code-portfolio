class Brick {
  constructor(setup) {
    const { x, y, width, height } = setup;
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isCleared = false;
  }
  
  clear() {
    this.isCleared = true;
  }
  
  draw() {
    if (this.isCleared) return;    
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}