const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'lightgray';
ctx.lineWidth = 2;
ctx.strokeRect(50, 50, 270, 180);

ctx.fillStyle = 'red';
ctx.fillRect(230, 50, 90, 180);

ctx.fillStyle = 'darkblue';
ctx.fillRect(50, 50, 90, 180);
