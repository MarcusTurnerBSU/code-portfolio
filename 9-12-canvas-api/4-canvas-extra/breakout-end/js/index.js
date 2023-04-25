const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const game = new Game();

function main() {
  requestAnimationFrame(main);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  game.update();
  game.draw();
}

main();