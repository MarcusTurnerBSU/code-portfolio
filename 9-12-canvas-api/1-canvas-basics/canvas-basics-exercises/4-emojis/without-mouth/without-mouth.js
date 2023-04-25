const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 12;
ctx.arc(200, 200, 155, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = '#FFFF00';
ctx.arc(200, 200, 150, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.moveTo(150, 150);
ctx.lineTo(150, 130);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(250, 130);
ctx.stroke();