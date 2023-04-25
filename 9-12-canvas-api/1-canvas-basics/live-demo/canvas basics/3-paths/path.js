const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(512, 70);
ctx.lineTo(100, 350);
ctx.lineTo(924, 350);
// ctx.lineTo(512, 70); don't need to add this as we can use closePath
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(512, 420);
ctx.lineTo(100, 700);
ctx.lineTo(924, 700);
ctx.fill(); // don't need to write the final path or closePath as the fill method will join the final path