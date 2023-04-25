const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let drawingFlag = false;

function startDrawing() {
  drawingFlag = true;
}

function drawCircle(event) {
  if (!drawingFlag) return;

  ctx.beginPath();
  ctx.arc(event.offsetX,event.offsetY, 100, 0, Math.PI * 2);
  ctx.stroke();
}

function stopDrawing() {
  drawingFlag = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawCircle);
canvas.addEventListener('mouseup', drawCircle);
addEventListener('mouseup', stopDrawing);