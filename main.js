noseX="";
noseY="";
function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	Gameover =loadSound("gameover.wav");
	mario_die =loadSound("mariodie.wav");
	mario_kills = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');// placing canvas in the div id canvas(.parent )the main code.
	instializeInSetup(mario);

video=createCapture(VIDEO);
video.size(800,400);
video.parent('game_console');

poseNet=ml5.poseNet(video,model_loaded);
poseNet.on('pose',gotresults);
}

function draw() {
	game()
}
function model_loaded(){
	console.log("model loaded !!!!")
}
function gotresults(results){
if (results.length > 0) {

	console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;

}
}






