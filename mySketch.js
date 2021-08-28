var x=2;
var y=3;
var canvas;
var h1;
var circolor;
var button;
let img;
let i =0; 



function setup() {
	canvas = createCanvas(400, 400);
	
	background(100);
	img = loadImage("kitten-1285341_640.png"); // Load the image
	h1 = createElement("h1","i am h1");
	canvas.position(280,300);
	circolor = color(225,0,0);
	bgcolor = color(225,0,0);
	button = createButton("Press here");
	button.mousePressed(changeColor);
	button.position(350,250);
	
}
function changeColor(){
	bgcolor = color(random(0,225),random(0,20),250);
}

// function mousePressed(){
// createP("My fav color");
// 	bgcolor = color(random(0,225),random(0,20),250);
// 	circolor = color(random(0,225),20,2500);
// }
function draw() {
	i = i+1;
	background(bgcolor);
	fill('#3C1874');
	image(img, 100, 100);
	img.resize(200, 200);
	ellipse(x, y, 40, 40);
	h1.position(x,y);
	x = i+random(-10,10);
	y = i+ random(-10,10);
}