var capture
var img
var negimg
var blurLevel = 3
var fadeLevel = 0
var capturing

function preload(){
	capture = initCapture()
}

function setup() {
	createCanvas(capture.width, windowHeight)
	capture.hide()
	capturing = true
}

function draw() {
	if(capturing){
		image(capture.get(), 0, 0)
	} else {
		push()
			tint(fadeLevel, fadeLevel, 255)
			image(img ,0,0)
		pop()
	}
}

function touchStarted(){
	if(capturing){
		img = capture.get()
		capture = null
		fadeLevel = 30
	} else {
		capture = initCapture
		fadeLevel = 0
	}
	capturing = !capturing
}

function deviceShaken(){
	if(!capturing){
		if(fadeLevel < 255){
			fadeLevel += 1
			fadeLevel = constrain(fadeLevel, 0, 255)
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
