var posX = 0;
var posY = 0;
var directionY = false;

var startButton;
var startBounce = false;

var linePoints = [0, 0, 400, 0];


function setup() {

    createCanvas(400, 400);


startButton = createButton("start");
startButton.position(0, 400);
startButton.mousePressed(function(){
    posY = 0;
    if (startBounce == false) {
        startBounce = true;
    }else{
        startBounce = false;
    }
});



}

function draw() {


frameRate (80);

background('red');

    if (startBounce == true){

    ellipse(width / 2, posY, 50, 50);

    if (directionY == false){
        posY++;
    } else {
        posY--;

    }
        if (posY >=height) {
            directionY = true;
        }

    if (posY <=0){
        directionY = false;
       }

    }

    fill('orange');
    stroke("cyan");
    strokeWeight(4);



    ellipse(127,127,100,100);

    fill('purple');
    ellipse(110,105,10,10);
    ellipse(mouseX,height/2,width/10,height/10);

rect (0,map(mouseY,0,height,125,175),width,height/6);


    fill('purple');
    ellipse(140,105,10,10)

    fill('orange');
    arc(125,125, 15, 5, HALF_PI, PI);

    line(100,150,150,150)


}

