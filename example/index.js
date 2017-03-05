var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var fps = new FPSPumpkin();

function renderLoop(){

	fps.beginMeasurement();

	clear(cleared)

	function cleared(){
		draw(drawn);
	}

	function drawn(){
		
		fps.endMeasurement();

		requestAnimationFrame(renderLoop);
	}

}
requestAnimationFrame(renderLoop);

function draw(next){
	ctx.fillText("FPS: "+ Math.round(fps.getFPS()), 1, 16);
	ctx.fillText("Measurement Duration: " + Math.round(fps.getMeasurementDuration()) + " ms", 1, 32);
	ctx.fillText("Total Frames: " + fps.getTotalFrames(), 1, 48);
	if(typeof next === "function"){
		next();
	}
}

function clear(next){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	if(typeof next === "function"){
		next();
	}
}