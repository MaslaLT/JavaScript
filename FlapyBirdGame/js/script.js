var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');

var bird = new Image();
var background = new Image();
var topPipe = new Image();
var bottomPipe = new Image();
var ground = new Image();
bird.src = "images/bird.png";
background.src = "images/bg.png";
topPipe.src = "images/pipeNorth.png";
bottomPipe.src = "images/pipeSouth.png";
ground.src = "images/fg.png";

var birdXposition = 10;
var birdYposition = 250;
var gravity = 1;

var pipeGap = 100;
var calculatedPipeGap = topPipe.height + pipeGap;

//Move up on key press

document.addEventListener("keydown", moveUp);

function moveUp()
{
    birdYposition -= 20;
}

// Pipes coordinates

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

function draw()
{
    ctx.drawImage(background,0,0);

    for(var i = 0; i < pipe.length; i++) {

        ctx.drawImage(topPipe,pipe[i].x,pipe[i].y);
        ctx.drawImage(bottomPipe,pipe[i].x,pipe[i].y + calculatedPipeGap);

        pipe[i].x--;
        console.log(pipe);
    }

    ctx.drawImage(ground,0,background.height - ground.height);
    ctx.drawImage(bird,birdXposition,birdYposition);
    birdYposition += gravity;
    requestAnimationFrame(draw);
}

draw();