let backgroundImg, computer1, computer2, cursor1Img, cursor2Img, newImage;
let cursor1X, cursor1Y, cursor2X, cursor2Y;
let isMovingLeft1, isMovingRight1, isMovingUp1, isMovingDown1;
let isMovingLeft2, isMovingRight2, isMovingUp2, isMovingDown2;
let newImageVisible = false;

function preload() {
  backgroundImg = loadImage('assets/base.png');
  computer1 = loadImage('assets/computer1.png');
  computer2 = loadImage('assets/computer2.png');
  cursor1Img = loadImage('assets/cursor1.png');
  cursor2Img = loadImage('assets/cursor2.png');
  newImage = loadImage('assets/spark.png');
}

function setup() {
  createCanvas(1350, 600);
  textAlign(CENTER, CENTER);
  
  // Resize images
  backgroundImg.resize(width, height);
  computer1.resize(340, 0);
  computer2.resize(340, 0);
  
  // Initialize cursor positions
  cursor1X = width / 2.7;
  cursor1Y = height / 2;
  cursor2X = 3 * width / 4.9;
  cursor2Y = height / 2;
  
  isMovingLeft1 = false;
  isMovingRight1 = false;
  isMovingUp1 = false;
  isMovingDown1 = false;
  isMovingLeft2 = false;
  isMovingRight2 = false;
  isMovingUp2 = false;
  isMovingDown2 = false;
}

function draw() {
  background(255);
  
  // Draw background image
  image(backgroundImg, 0, 0);
  
  // Draw computers at custom coordinates
  image(computer1, 65, 90); // Adjust x, y coordinates for computer1
  image(computer2, 990, 180); // Adjust x, y coordinates for computer2
  
  handleKeys();
  displayCursors();
  
  // Check if cursors are attending different computers
  let cursor1AttendingComputer1 = dist(cursor1X, cursor1Y, 65 + computer1.width / 2, 90 + computer1.height / 2) < computer1.width / 2;
  let cursor2AttendingComputer2 = dist(cursor2X, cursor2Y, 990 + computer2.width / 2, 180 + computer2.height / 2) < computer2.width / 2;
  
  if (cursor1AttendingComputer1 && cursor2AttendingComputer2) {
    // If yes, show the new image in the center
    image(newImage, width / 2 - newImage.width / 2, height / 2 - newImage.height / 2);
    newImageVisible = true;
  } else {
    newImageVisible = false;
  }
  
  // Display instructions
  fill(0);
  textSize(12);
  text("Use the WASD keys to control the cursor on the left side", width / 2, height - 23);
  text("Use arrow keys to control the cursor on the right side", width / 2, height - 10);
}


function handleKeys() {
  if (isMovingUp1) {
    cursor1Y -= 5;
  }
  if (isMovingDown1) {
    cursor1Y += 5;
  }
  if (isMovingLeft1) {
    cursor1X -= 5;
  }
  if (isMovingRight1) {
    cursor1X += 5;
  }
  
  if (isMovingUp2) {
    cursor2Y -= 5;
  }
  if (isMovingDown2) {
    cursor2Y += 5;
  }
  if (isMovingLeft2) {
    cursor2X -= 5;
  }
  if (isMovingRight2) {
    cursor2X += 5;
  }
}

function keyPressed() {
  if (key === 'w') {
    isMovingUp1 = true;
  }
  if (key === 's') {
    isMovingDown1 = true;
  }
  if (key === 'a') {
    isMovingLeft1 = true;
  }
  if (key === 'd') {
    isMovingRight1 = true;
  }
  
  if (keyCode === UP_ARROW) {
    isMovingUp2 = true;
  }
  if (keyCode === DOWN_ARROW) {
    isMovingDown2 = true;
  }
  if (keyCode === LEFT_ARROW) {
    isMovingLeft2 = true;
  }
  if (keyCode === RIGHT_ARROW) {
    isMovingRight2 = true;
  }
}

function keyReleased() {
  if (key === 'w') {
    isMovingUp1 = false;
  }
  if (key === 's') {
    isMovingDown1 = false;
  }
  if (key === 'a') {
    isMovingLeft1 = false;
  }
  if (key === 'd') {
    isMovingRight1 = false;
  }
  
  if (keyCode === UP_ARROW) {
    isMovingUp2 = false;
  }
  if (keyCode === DOWN_ARROW) {
    isMovingDown2 = false;
  }
  if (keyCode === LEFT_ARROW) {
    isMovingLeft2 = false;
  }
  if (keyCode === RIGHT_ARROW) {
    isMovingRight2 = false;
  }
}

function displayCursors() {
  image(cursor1Img, cursor1X, cursor1Y, cursor1Img.width * 0.07, cursor1Img.height * 0.07);
  image(cursor2Img, cursor2X, cursor2Y, cursor2Img.width * 0.07, cursor2Img.height * 0.07);
}
