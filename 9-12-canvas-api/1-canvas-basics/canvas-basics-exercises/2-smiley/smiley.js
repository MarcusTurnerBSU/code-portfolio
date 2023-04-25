const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(200, 200, 150, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 20, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 150, 20, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 75, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 5, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 150, 5, 0, Math.PI * 2);
ctx.fill();
