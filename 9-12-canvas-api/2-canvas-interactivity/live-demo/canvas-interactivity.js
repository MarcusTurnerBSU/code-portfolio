const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

//let drawingFlag = false;
//
//function startDrawing() {
//    drawingFlag = true
//}

//function drawCircle(event) {
//    if(!drawingFlag) return;
//

//let prevCirclesX = [];
//let prevCirclesY = [];

//const tracesCanvas = document.createElement('canvas');
//tracesCanvas.width = 1024;
//tracesCanvas.height = 768;
//const tracesCtx = tracesCanvas.getContext('2d');

//tracesCtx.strokeStyle = 'lightblue';

let circleX = 100;
let circleY = 100;
let circlePath;
//let stepSize = 10;

let draggingFlag = false;

let prevMouseX, prevMouseY;

function drawCircle(x, y) {
    circlePath = new Path2D();
    ctx.arc(x, y, 100, 0, Math.PI * 2);
//    ctx.arc(event.OffsetX, event.offsetY, 100, 0, Math.PI * 2);
    ctx.stroke(circlePath);
    
//    tracesCtx.beginPath();
//    tracesCtx.arc(x, y, 100, 0, Math.PI * 2);
//    tracesCtx.stroke();
//}

//function stopDrawing() {
//    drawingFlag = false;
//}

//function changeCirclePosition(event) {
//    ctx.clearRect(0, 0, 1024, 768);
//    ctx.drawImage(tracesCanvas, 0, 0);
//    drawCircle(event.offsetX, event.offsetY);
    
//    for (let i = 0; i < prevCirclesX.length; i++) {
//        drawCircle(prevCirclesX[i], prevCirclesY[i]);
//    }
    
//    ctx.strokeStyle = 'black';
//    drawCircle(event.offsetX, event.offsetY);
    
//    prevCirclesX.push(event.offsetX);
//    prevCirclesY.push(event.offsetY);
}

//function nudgeCircle(event) {
//    if (event.key == 'ArrowUp') {
//        circleY -= stepSize;
//    } else if (event.key == 'ArrowDown') {
//        circleY += stepSize;
//    } else if (event.key == 'ArrowLeft') {
//        circleX -= stepSize;
//    } else if event.key == 'ArrowRight' {
//        circleX += stepSize;        
//    }
//    
//    ctx.clearRect(0, 0, 1024, 768);
//    drawCircle();
//}
//
//function applyLargeSteps() {
//    if (event.key == 'Shift') {
//    stepSize = 100;
//    }
//}
//
//function applySmallSteps() {
//    if (event.key == 'Shift') {
//    stepSize = 10;
//    }
//}
//canvas.addEventListener('click', changeCirclePosition);
//addEventListener('keydown', nudgeCircle);
//addEventListener('keydown', applyLargeSteps);
//addEventListener('keyup', applySmallSteps);

//function checkClick(event) {
//    if ( ctx.isPointInPath(circlePath, event.offsetX, event.offsetY) {
//        alert('Point in cirle!');
//        }
//}

function startDragging(event) {
    if ( ctx.isPointInPath(circlePath, event.offsetX, event.offsetY || ctx.isPointInStroke(circlePath, event.offsetX, event,offsetY)) {
       draggingFlag = true;
        
        prevMouseX = event.offsetX;
        prevMouseY = event.offsetY;
        }
        )
}

function dragCircle(event) {
    if (!draggingFlag) return;
    
    circleX = event.offsetX;
    circleY = event.offsetY;
    
    ctx.clearRect(0, 0, 1024, 768);
    drawCircle(circleX, circleY);
}
    
function stopDragging() {
    draggingFlag = false;
}   
    
canvas.addEventListener('mousedown', startDragging);
canvas.addEventListener('mousemove', dragCircle);
addEventListener('mouseup', stopDragging);

drawCircle(circleX, circleY);
//canvas.addEventListener('mousedown', startDrawing);
//canvas.addEventListener('mousemove', drawCircle);
//canvas.addEventListener('mouseup', drawCircle);
//addEventListener('mouseup', stopDrawing);


//function drawCircle(event) {
//    ctx.beingPath();
//    ctx.arc(event.OffsetX, event.offsetY, 100, 0, Math.PI * 2);
//    ctx.stroke();    
//}
//
//canvas.addEventListener('click', drawCircle);
