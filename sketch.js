let img;
let bg;
var header;
var button;
var bgcolor;

function preload() {
  // img = loadImage('space.jpg'); 

createElement('h1', 'THE SOLAR SYSTEM');

}

function setup() {
  smooth();
  
  createCanvas(600, 500, WEBGL);
  noCursor();
  bgcolor = color(200);
  button = createButton("change background");
  button.mousePressed(changeColor); 
 
  header = createElement("h2", "Can you guess which fact is about each planet?");
  header = createElement("h3", "1) A year (in terms of Earth time) is only 88 days");
  header = createElement("h3", "2) Its surface temperature can reach 471˚ F");
  header = createElement("h3", "3) The only planet not named after a Roman god or goddess");
  header = createElement("h3", "4) Has the tallest mountain in the solar system");
  header = createElement("h3", "5) Has the shortest day of all the planets (9 hours and 55 minutes)");
  header = createElement("h3", "6) Is the flattest planet due to low density and fast rotation");
  createElement("h3", "7) Only completes an orbit around the sun every 84 earth years");
  createElement("h3", "8) It was first observed in 1846");
  header = createElement("h2", "answers");
  header.mouseOver(newText);
  header.mouseOut(oldText);
   

}

function draw() {
  background(bgcolor);
 
  // image(img, 20,20)
  for (var i = 0; i < 5; i++) {
   var x = random(-300,300);
    var y = random(-300,300);
    push()
    
    noStroke()
    fill(255, 255, 0)
    ellipse(x,y,5,5);
      
    pop()
 }
  
  //sun
  push()
  fill(240, 197, 5)
  noStroke();
  sphere(80);
  pop()
  // erase();
  
  //mercury
  push()
  rotateY(frameCount * 0.05);
  fill(173, 169, 156)
  noStroke()
  translate(0, 0, 105);
  sphere(8);
  pop()

  //venus
  push()
  rotateY(frameCount * 0.03);
  fill(156, 130, 47)
  noStroke()
  translate(0, 0, 150);
  sphere(15);
  pop()
  
  //earth
  push()
  rotateY(frameCount * 0.02);
  fill(21, 160, 214)
  noStroke()
  translate(0, 0, 200);
  sphere(18);
  pop()

  //mars
  push()
  rotateY(frameCount * 0.01);
  fill(219, 124, 0)
  noStroke()
  translate(0, 0, 250);
  sphere(15);
  pop()
  
  //jupiter
   push()
  rotateY(frameCount * 0.005);
  fill(204, 151, 53)
  noStroke()
  translate(0, 0, 310);
  sphere(25);
  pop()
  
  //saturn
   push()
  rotateY(frameCount * 0.007);
  fill(207, 201, 165)
  noStroke()
  translate(0, 0, 380);
  sphere(20);
  pop()
  
  //uranus
  push()
  rotateY(frameCount * 0.009);
  fill(211, 237, 234)
  noStroke()
  translate(0, 0, 460);
  sphere(18);
  pop()
  
  //neptune
  push()
  rotateY(frameCount * 0.01);
  fill(51, 105, 171)
  noStroke()
  translate(0, 0, 500);
  sphere(30);
  pop()

 
  // noErase();
}

function changeColor(){
  bgcolor = color(random(0,0),random(0,0),random(200,0));
  
} 
function newText() {
  header.html("Mercury, Venus, Mars, Earth, Jupiter, Saturn, Uranus, Neptune");
}

function oldText() {
  header.html("planet facts");
  
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}