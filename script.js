var c = document.getElementById("canvasMain");
c.width = screen.width;
var ctx = c.getContext("2d");
var drawNow = false;
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var curX = -1;
var curY = -1;
var colorr = "red";
var clickColor = new Array();

function toggle(e){
    drawNow = !drawNow;
    if(drawNow){
        addClick(curX,curY);
        draw();
    }
}
document.addEventListener("keydown",(e)=>{
    if(e.keyCode === 20){
        toggle(e);
    }
});
function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.lineJoin = "round";
  ctx.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    ctx.beginPath();
        if(clickDrag[i] && i){
          ctx.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           ctx.moveTo(clickX[i]-1, clickY[i]);
         }
         ctx.lineTo(clickX[i], clickY[i]);
         ctx.closePath();
         ctx.strokeStyle = clickColor[i];
         ctx.stroke();
  }
}
function addClick(x,y,dragging){
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
        clickColor.push(colorr);
}

c.onmousemove = (e) => {
    curX = e.pageX - c.offsetLeft;
    curY = e.pageY - c.offsetTop;
    if(drawNow){
        addClick(curX,curY,true);
        draw();
    }
};

function clearCanvas(){
    ctx.clearRect(0,0,c.width,c.height);
    clickX = [];
    clickY = [];
    clickDrag = [];
}
function setColor(col){
    colorr = col;
}