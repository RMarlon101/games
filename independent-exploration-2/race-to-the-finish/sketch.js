let redXPos = 25;
let redYPos = 100;
let blueXPos = 25;
let blueYPos = 200;
let redScore = 0;
let blueScore = 0;
let finishLine = 600;


function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
    strokeWeight(3);
}

function draw() {
    background(0, 200, 0);

    // move both balls random distances
    redXPos += random(-1, 5);
    redYPos += random(-0.5, 0.5);
    blueXPos += random(-1, 5);
    blueYPos += random(-0.5, 0.5);

    // show scores
    textSize(20);
    fill(255, 0, 0);
    text(redScore, 0, 20);
    fill(0, 0, 255);
    text(blueScore, 0, 35);

    // show finish line
    line(finishLine, 0, finishLine, 300);

    // red ball
    fill(255, 0, 0);
    ellipse(redXPos, redYPos, 50);
    
    // blue ball
    fill(0, 0, 255);
    ellipse(blueXPos, blueYPos, 50);

    // crossed finish line
    if (blueXPos >= finishLine && redXPos < finishLine || redXPos >= finishLine && blueXPos < finishLine) {
        if (blueXPos > finishLine) {
            // blue wins
            blueScore += 1;
            redXPos = 25;
            redYPos = 100;
            blueXPos = 25;
            blueYPos = 200;
        
        } 
            if (redXPos > finishLine) {
            // red wins
            redScore += 1;
            redXPos = 25;
            redYPos = 100;
            blueXPos = 25;
            blueYPos = 200;
        }
    }
        // just incase the balls have managed to meet at the same time
}  if(blueXPos && redXPos >= finishLine) {
    redScore += 1;
    blueScore += 1;
    redXPos = 25;
    redYPos = 100;
    blueXPos = 25;
    blueYPos = 200;
}
