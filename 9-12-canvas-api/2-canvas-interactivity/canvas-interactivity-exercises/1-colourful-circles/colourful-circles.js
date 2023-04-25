const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let drawingFlag = false;

function startDrawing() {
  drawingFlag = true;
}

function drawCircle(event) {
  if (!drawingFlag) return;

  ctx.beginPath();
  ctx.arc(Math.random() * 1024, Math.random() * 768, Math.random() * 150 % 2, Math.random() * 150 % 2, Math.PI * 2);    
  ctx.fill();
  ctx.fillStyle = `rgb(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255}
  )`;
    ctx.closePath();
}

function stopDrawing() {
  drawingFlag = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawCircle);
canvas.addEventListener('mouseup', drawCircle);
addEventListener('mouseup', stopDrawing);