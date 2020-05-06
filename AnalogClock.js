//this function creates the face of the clock
function drawFace(ctx, radius) 
{
  //creates the face of the clock and styles it
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FF4D4D";
  ctx.fill();

  //draws and styles the outer circle
  ctx.strokeStyle = "white";
  ctx.lineWidth = 4;
  ctx.stroke();

  //creates and styles the center circle of the face
  ctx.beginPath();
  ctx.arc(0, 0, 110 * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
}

//draws the hour lines
function drawLines(ctx)
{
  var i = 12;
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  while (i > 0)
  {
    ctx.save();
    ctx.beginPath();
    ctx.translate(0, 0);

    var angle = (i * 30) * Math.PI / 180;
    ctx.rotate(angle);
    ctx.translate(0, -360 / 2);
        
    ctx.save();
    ctx.translate(0, -10);
    ctx.rotate(-angle);
    ctx.restore();
        
    ctx.moveTo(0, 6);
    ctx.lineTo(0, 25);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
        
    i--;
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHands(ctx, hour, radius*0.8, radius*0.07);

    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHands(ctx, minute, radius*0.6, radius*0.07);

    // second
    second=(second*Math.PI/30);
    drawHandsSeconds(ctx, second, radius * 0.5, radius*0.02);
}

function drawHands(ctx, pos, length, width)
{   
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function drawHandsSeconds(ctx, pos, length, width)
{
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}