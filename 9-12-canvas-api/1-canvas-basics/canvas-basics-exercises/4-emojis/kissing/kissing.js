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
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.moveTo(250, 150);
ctx.lineTo(250, 130);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#DAA520';
ctx.lineWidth = 7;
ctx.lineCap = 'butt';
ctx.moveTo(175, 200);
ctx.lineTo(225, 200);
ctx.stroke();

ctx.beginPath();
ctx.arc(220, 220, 20, 0, Math.PI * 1.5, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(220, 220, 20, 0, Math.PI * 0.5);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(197, 239);
ctx.lineTo(230, 239);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 244, 5, 0, Math.PI * 1.5);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(197, 248);
ctx.lineTo(227, 248);
ctx.stroke();

ctx.beginPath();
ctx.arc(220, 267, 20, 0, Math.PI * 1.5, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(220, 267, 20, 0, Math.PI * 0.5);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(175, 287);
ctx.lineTo(225, 287);
ctx.stroke();