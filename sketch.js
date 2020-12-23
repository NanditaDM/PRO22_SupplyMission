var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Gravity = Matter.Body.setStatic(packageSprite, false);
var boxSide1Body, boxSide2Body, boxSide3Body;
var boxSide1Sprite, boxSide2Sprite, boxSide3Sprite;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//Creating the Sprites
	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	boxSide1Sprite = createSprite(260, 610, 20, 100);
	boxSide1Sprite.shapeColor=color(251,1,2);

	boxSide2Sprite = createSprite(460, 610, 20, 100);
	boxSide2Sprite.shapeColor=color(251,1,2);

	boxSide3Sprite = createSprite(350, 650, 200, 20);
	boxSide3Sprite.shapeColor=color(251,1,2);


	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;


	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//Creating the world
	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground); 

	//Creating the bodies for the basket
	boxSide1Body = Bodies.rectangle (260, 610, 20, 100, {isStatic:true} );
	World.add(world, boxSide1Body);

	boxSide2Body = Bodies.rectangle (460, 610, 20, 100, {isStatic:true} );
	World.add(world, boxSide2Body);

	boxSide3Body = Bodies.rectangle (350, 650, 200, 20, {isStatic:true} );
	World.add(world, boxSide3Body);

	//Creating the body for the package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

	//Setting the body to the sprites for the basket
  boxSide1Sprite.x= boxSide1Body.position.x;
  boxSide1Sprite.y= boxSide1Body.position.y;

  boxSide2Sprite.x= boxSide2Body.position.x;
  boxSide2Sprite.y= boxSide2Body.position.y;

  boxSide3Sprite.x= boxSide3Body.position.x;
  boxSide3Sprite.y= boxSide3Body.position.y;

	////Setting the body to the sprites for the package
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  drawSprites();
}

//Spcifying the Trigger command and making the package move when relesed
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}