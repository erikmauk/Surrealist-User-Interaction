var change_eye;

function setup(){
   createCanvas(800, 530);
   change_eye = false;
}

function skyIris(){
   push();
       translate(270,460);
         fill(83, 129, 155);
         beginShape();
            vertex(0, 0);
            bezierVertex(0, 0, -200, -125, 0, -322);
            bezierVertex(0, -320, 125, -375, 295, -320);
            bezierVertex(295, -320, 480, -140, 272, 0)
            bezierVertex(272, 0, 145, 51, 0, 0)
         endShape(CLOSE);
       pop();
       drawCloud(440, 190, 3);
       drawCloud(475, 320, 1.5);
       drawCloud(300, 400, .75);
       drawCloud(350, 350, 1.1);
       drawCloud(480, 420, 2.1);
       drawCloud(290, 280, 2.3);
       drawCloud(520, 250, 1);
       drawCloud(575, 350, .8);
}

function mouseClicked(){
   if(mouseX > 360 && mouseX < 460 &&  mouseY > 240 && mouseY < 340)
   {
      change_eye = true;
      skyIris();
   }
}


function drawCloud(x, y, sc){
   push();
      translate(x, y);
      scale(sc);
      noStroke();
      fill(255);
      ellipse(0, 0, 80, 20);
      ellipse(-15, -5, 40, 15);
      ellipse(15, -7, 35, 20);
      ellipse(0, -13, 30, 15);
   pop();
}

function draw() {
  background(255);
  fill(152, 124, 80)
  rect(0, 0, 800, 530);

   // OUTLINE OF EYE 
      push();
      translate(10, 290);
      fill(255);
      beginShape();
         vertex(0, 0);
         bezierVertex(0, 0, 15, -15, 17, -13);
         bezierVertex(17, -13, 45, -15, 60, -30);
         bezierVertex(60, -30, 370, -375, 810, 0);
         bezierVertex(810, 0, 420, 400, 80, 50);
         bezierVertex(80, 50, 40, 40, 40, 40);
         bezierVertex(40, 40, 15, 40, 0, 20);
         bezierVertex(0, 20, -5, 10, 0, 0);
      endShape(CLOSE);
      pop();

   // TEAR DUCT
      push();
      translate(25, 277);
      fill(96, 76, 50)
      beginShape();
         vertex(0, 0);
         bezierVertex(0, 0, -5, 13, 5, 26);
         bezierVertex(5, 26, 7, 25, 3, 48);
         bezierVertex(5, 48, -40, 28, 0, 0)
      endShape();
      pop();

   // IRIS
      push();
      translate(270,460);
      fill(82, 49, 34);
      beginShape();
         vertex(0, 0);
         bezierVertex(0, 0, -200, -125, 0, -322);
         bezierVertex(0, -320, 125, -375, 295, -320);
         bezierVertex(295, -320, 480, -140, 272, 0)
         bezierVertex(272, 0, 145, 51, 0, 0)
      endShape(CLOSE);
      pop();

      if(change_eye){
         skyIris();
      }
      
   // PUPIL
      push();
         translate(410, 290)
         noStroke();
         fill(50);
         ellipse(0, 0, 100);
      pop();
}



