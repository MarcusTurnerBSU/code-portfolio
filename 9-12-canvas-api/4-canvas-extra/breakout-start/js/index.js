const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

function main() {
  requestAnimationFrame(main);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Do stuff
}

main();