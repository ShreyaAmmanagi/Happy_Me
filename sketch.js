var sent;
var img1,img2,gameState = 0;
var database
var attendant1,img;
var attendantCount,allInfo;
var sprite,sprite1,sprite2,sprite3,sprite4,sprite5,sprite6,sprite7,next;
function preload(){
  img = loadImage("Screenshot 2021-03-21 134120.png")
  img1 = loadImage("Happy-and-free-woman.png")
  img2 = loadImage("11457-smile-images-hd-image.png")
  img3 = loadImage("IMG_20210317_172630.jpg")
  img4= loadImage("IMG_20210317_172750.jpg")
  img5 = loadImage("IMG_20210303_190245.jpg")
  img6 = loadImage("Screenshot 2021-03-18 182348.png")
  img7 = loadImage("Screenshot 2021-03-18 184227.png")
  img8 = loadImage("Screenshot 2021-03-17 215452.png")
  img9 = loadImage("Screenshot 2021-03-19 115422.png")
  img10 = loadImage("InkedScreenshot 2021-03-17 173614_LI.jpg")
  img11 = loadImage("Screenshot 2021-03-17 173144.png")
  img12 = loadImage("Screenshot 2021-03-17 173859.png")
  img13 = loadImage("Screenshot 2021-03-17 174028.png")
  img14 = loadImage("Screenshot 2021-03-17 174809.png")
  img15 = loadImage("Screenshot 2021-03-17 174439.png")
  img16 = loadImage("Screenshot 2021-03-17 175230.png")
  img17 = loadImage("Screenshot 2021-03-17 175656.png")
  img18 = loadImage("Screenshot 2021-03-17 175750.png")
  img19 = loadImage("484311.png")
  img20 = loadImage("484332.png")
  img21 = loadImage("484350.png")
  img22 = loadImage("Screenshot 2021-03-21 171531.png")
  img23 = loadImage("Screenshot 2021-03-21 180717.png")
  img24 = loadImage("PinClipart.com_perfume-clipart_5263739.png")
  img25 = loadImage("Screenshot 2021-03-21 183726.png")
  img26 = loadImage("Screenshot 2021-03-22 123003.png")
  img27 = loadImage("79706 (1).png")
  img28 = loadImage("2100517.png")
  img29 = loadImage("22-226813_64kib-864x1022-potion-icon-png-2-mana-potion.png")
  img30 = loadImage("105919_potion-png.png")
  img31 = loadImage("—Pngtree—game purple life potion_4382477 (1).png")
  img32 = loadImage("n1063479.png")
  img33 = loadImage("39-393065_cake-slice-transparent-background.png")
  img34 = loadImage("Screenshot 2021-03-25 191305.png")
  img35 = loadImage("Screenshot 2021-03-25 191113.png")
  img36 = loadImage("Screenshot 2021-03-25 185531.png")
}
function setup() {
  createCanvas(1290,619);
  database = firebase.database();
  sent = new Word()
  attendant1 = new attendant()
}

function draw() {
  background(0,204,204)
 
  sent.display()
 
 
    
  if(gameState == "last"){
  fill("blue")
  textSize(20)
  textFont("Jokerman")
  text("Here's some cake for you",90,200)
  
}
  drawSprites();
}

