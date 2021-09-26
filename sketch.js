var img;
var k = 7/9;
var l = 5 / 2;
var m = 6 / 4;
 
function preload()
{
  // load image
  img = loadImage('assets/hummingbird.png');
}
 
function setup() 
{
  // set canvas size
  createCanvas(1200, 800); 
}
 
function draw() 
{
  background(173, 216, 230);
  fill(15, 178, 57)
  rect(0, 550, 1200, 350)
 
  // display image (img, x, y)
  image(img, 0, 0, img.width / 1.75, img.height / 1.75);

  translate(600, 400);
  placeFlower(rose);
  translate(-300, -150);
  placeFlower(flower)
  translate(400, -300);
  placeFlower(lastOne);
}

function placeFlower(flower_type) {
  flower_type();
  flower_type(45, 40);
  flower_type(-90, 0);
  flower_type(0, 45);
  flower_type(90, 0);
  flower_type(-45, -30);
  flower_type(0, 60);
  stem(35, 0);
}

function rose(xPos, yPos, scaleNum = 1){
  translate(xPos, yPos);
  scale(scaleNum);
  fill(255, 0, 0)
  beginShape();
  stroke (255);
  for (var a = 0; a < TWO_PI * 10; a += 0.02) {
    var r = 30 * cos(k * a)
    var x = r * cos(a)
    var y = r * sin(a)
    vertex(x, y)
  }
  endShape();
}

function flower(xPos, yPos, scaleNum = 1){
  translate(xPos, yPos);
  scale(scaleNum);
  beginShape();
  fill(255, 165, 0);
  stroke (255);
  for (var a = 0; a < TWO_PI * 10; a += 0.02) {
    var r = 30 * cos(l * a)
    var x = r * cos(a)
    var y = r * sin(a)
    vertex(x, y)
  }
  endShape();
}

function lastOne(xPos, yPos, scaleNum = 1){
  translate(xPos, yPos);
  scale(scaleNum);
  beginShape();
  fill(162, 40, 255);
  stroke (255);
  for (var a = 0; a < TWO_PI * 10; a += 0.02) {
    var r = 30 * cos(m * a)
    var x = r * cos(a)
    var y = r * sin(a)
    vertex(x, y)
  }
  endShape();
}

function stem(xPos, yPos) {
  translate(xPos, yPos)
  fill(0, 128, 0);
  rotate(1);
  rect(0, 0, 50, 5);
  translate(50, 5);
  rotate(PI / 2 - 1)
  ellipse(0, -40, 30, 60);
  rect(0, 0, -3, -70);
  rotate(- (PI / 2 - 1))
  rect(0, -5, 50, 5)
  translate(45, 0)
  rotate(-1);
  rect(0, 0, 5, 50);
  rotate(PI/2)
  ellipse(0, 40, 30, 60)
  rect(0, 0, 3, 70);
  rotate(-PI / 2)
}