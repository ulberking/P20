var cat, mouse, garden, garden_image, cat_move, cat1, cat2, mouse1, mouse2,mouse3, mouse4
gameState = "notouch"
function preload() {
cat_move=loadAnimation("images/cat2.png","images/cat3.png")
garden_image=loadImage("images/garden.png")
mouse1=loadAnimation("images/mouse1.png")
mouse2=loadAnimation("images/mouse4.png")
cat1=loadAnimation("images/cat1.png")
cat2=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1200,800);
   cat=createSprite(1000,700,1,1)
   cat.addAnimation("_cat_",cat_move)
cat.scale = 0.2
cat.addAnimation("_cat_1",cat1)
cat.addAnimation("_cat_2",cat2)
mouse=createSprite(200,700,1,1)
mouse.addAnimation("_mouse_1",mouse1)
mouse.addAnimation("_mouse_2",mouse2)
mouse.scale = 0.2
}

function draw() {
background(garden_image)

  isTouching()
  keyPressed()
    drawSprites();
    
}


function keyPressed(){
if(keyDown("right_arrow")){
    cat.x = cat.x + 2
}
if(keyDown("left_arrow")){
    cat.x = cat.x - 2
}
}
function isTouching() {
    if (
      mouse.x + cat.x >=
        -(mouse.width / 2 + cat.width / 2) &&
      mouse.x - cat.x <= mouse.width / 2 + cat.width / 2 &&
      mouse.y - cat.y >=
        -(mouse.height / 2 + cat.height / 2) &&
      mouse.y - mouse.y <= mouse.height / 2 + cat.height / 2
    ) {
      mouse.changeAnimation("_mouse_1",mouse1);
      cat.changeAnimation("_cat_1",cat1);

    } else{
      mouse.changeAnimation("_mouse_2",mouse2);
      cat.changeAnimation("_cat_2",cat2);}

    }
  