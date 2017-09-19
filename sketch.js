var capture
var img
var negimg
var blurLevel = 3
var fadeLevel = 0
var capturing
function preload(){
	capture = createCapture({
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }
  });
}

function setup() {
	//createCanvas(windowWidth, windowHeight)
	createCanvas(640, 480)
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

function touchEnded(){
	if(capturing){
		img = capture.get()
		fadeLevel = 20
	} else {
		fadeLevel = 0
	}
	capturing = !capturing
}

function deviceShaken(){
	if(!capturing){
		fadeLevel += 1
		fadeLevel = constrain(fadeLevel, 0, 255)
		console.log(fadeLevel)		
	}	
}
