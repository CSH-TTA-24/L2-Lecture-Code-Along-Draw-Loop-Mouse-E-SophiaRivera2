function setup() {
 noStroke()
 
  createCanvas(500, 500);
  background(0, 0, 0);
//let xPos = random(0, 500);
//let yPos = random(0, 500);
  
  ellipse(mouseX, mouseY, 25, 25);
  
}
function draw() {
  let xPos = random(0, 500);
  let yPos = random(0, 500);

    ellipse(mouseX, mouseY, 25, 25);
}
function draw(){
  
   let r = random(0, 255)
   let g = random(0, 255)
   let b = random(0, 255)
  fill(r,g,b);
  ellipse(mouseX, mouseY, 25, 25);
}
function mouseClicked(){
 

    ellipse(mouseX, mouseY, 25, 25);
  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)
  fill(r,g,b);
}