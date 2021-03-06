var capture
var img
var negimg
var blurLevel = 3
var fadeLevel = 0
var capturing
var startFade = 20
var fadeChannge = 1

function preload(){
	capture = initCapture()
}

function setup() {
	createCanvas(capture.width, capture.height)
	capture.hide()
	capturing = true
}

function draw() {
	if(capturing){
		image(capture.get(), 0, 0)
	} else {
		push()
			tint(fadeLevel, fadeLevel, fadeLevel)
			image(img ,0,0)
		pop()
	}
}

function touchStarted(){
	if(capturing){
		img = capture.get()
		capture = null
		fadeLevel = startFade
	} else {
		capture = initCapture
		fadeLevel = 0
	}
	capturing = !capturing
}

function deviceShaken(){
	if(!capturing){
		if(fadeLevel < 255){
			fadeLevel += fadeChannge
			fadeLevel = constrain(fadeLevel, startFade, 255)
		}
	}	
}

function initCapture(){
	return createCapture({
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }
  });
}
