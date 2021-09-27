var img;
var k = 7/9;
var l = 5 / 2;
var m = 6 / 4;
var health = 50;
var maxHealth = 400;
 
function preload()
{
  // load image
  img = loadImage('assets/hummingbird.png');
}
 
function setup() 
{
  // set canvas size
  createCanvas(1200, 800); 
  roseButton = createButton('rose');
}
 
function draw() 
{
  // display image (img, x, y)
  background(173, 216, 230);
  if (health < maxHealth) {
    healthBar(health);
  }
  else {
    textSize(20)
    fill(255, 0, 0)
    text("Congrats! The hummingbird's health is full <3! You did it!", 900, 50, 200, 200)
  }
  fill(220, 220, 220)
  rect(200, 0, 600, 100)
  fill(15, 178, 57)
  rect(0, 550, 1200, 350)
  textSize(20)
  fill(199, 21, 133)
  text("Welcome to Hummingbird Pollination! Try to fill up your health bar, but remember: hummingbirds don't like roses :)", 250, 25, 550, 50);
  fill('red')
  translate(600, 400);
  placeFlower(flower);
  translate(-300, -150);
  placeFlower(rose)
  translate(300, -300);
  placeFlower(lastOne);
  translate(100, 0);
  placeFlower(lastOne);
  translate(30, -350);
  placeFlower(flower); 
  translate(-1000, -200)
  placeFlower(rose)
  translate(-150, -50)
  placeFlower(rose)
  translate(380, -200)
  placeFlower(lastOne)
  translate(150, -200)
  placeFlower(flower)
  translate(-600, -200)
  placeFlower(rose)
  translate(-325, -730)
  image(img, mouseX - 200, mouseY - 35, img.width / 1.75, img.height / 1.75);
  if (mouseY - 35 > 200){
    if (mouseY - 35 > 300 && mouseX - 200 < 250)  {
      health = max(health - 10, 0)
    }
    if ((mouseX - 200 > 250) && pmouseX != mouseX) {
      health += 10
    }
  }
}

function healthBar(currentHealth) {
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(900, 10, 200, 20);
  noStroke();
  fill(255, 0, 0);
  rect(900, 10, map(currentHealth, 0, maxHealth, 0, 200), 20);
  strokeWeight(1)
  text("Health Bar", 900, 50)
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