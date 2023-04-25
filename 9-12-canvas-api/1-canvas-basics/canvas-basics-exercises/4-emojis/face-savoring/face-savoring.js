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
ctx.lineCap = 'round';
ctx.lineWidth = 7;
ctx.arc(150, 150, 20, 0, Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 7;
ctx.arc(250, 150, 20, 0, Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 12;
ctx.arc(200, 200, 100, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(240, 300);
ctx.quadraticCurveTo(375, 375, 300, 250);
ctx.fill();

